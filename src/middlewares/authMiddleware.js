import { signInSchema, signUpSchema } from '../models/authSchemas.js';

import bcrypt from 'bcrypt';
import { cleanStringData } from '../server.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import sessionRepository from '../repositories/sessionRepository.js';
import userRepository from '../repositories/userRepository.js';

dotenv.config();

export function signUpSchemaValidation(req, res, next) {
  const { name, email, password } = req.body;
  const user = {
    name: cleanStringData(name),
    email: cleanStringData(email).toLowerCase(),
    password: cleanStringData(password),
  };
  const { error } = signUpSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    res.status(422).send({ message: errors });
  } else {
    const hashPassword = bcrypt.hashSync(password, 12);
    res.locals.user = { ...user, password: hashPassword };
    next();
  }
}

export async function checkEmailExists(req, res, next) {
  const { email } = res.locals.user;
  try {
    const emailExists = await userRepository.checkEmail(email);

    if (emailExists.rows[0]) {
      res.sendStatus(409);
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export function signInSchemaValidation(req, res, next) {
  const { email, password } = req.body;
  const user = { email: cleanStringData(email).toLowerCase(), password: cleanStringData(password) };
  const { error } = signInSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    res.status(422).send({ message: errors });
  } else {
    res.locals.user = user;
    next();
  }
}

export async function verifyUserCredentials(req, res, next) {
  const { email, password } = res.locals.user;
  try {
    const user = await userRepository.checkEmail(email);
    if (!user.rows[0]) {
      return res.status(401).send({ message: 'Usuário inválido!' });
    }

    const checkPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!checkPassword) {
      return res.status(401).send({ message: 'Senha inválida!' });
    } else {
      res.locals.user.user_id = user.rows[0].id;
      res.locals.user.name = user.rows[0].name;
      next();
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function sessionExists(req, res, next) {
  const { email } = res.locals.user;
  try {
    const sessionExist = await sessionRepository.checkSession(email);
    if (sessionExist.rows[0]?.status === `open`) {
      const { token } = sessionExist.rows[0];
      return res.send({ token });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function generateToken(req, res, next) {
  const { user_id, name, email } = res.locals.user;

  const token = jwt.sign({ user_id, name, email }, process.env.SECRET);

  try {
    await sessionRepository.newSession(user_id, token);
    res.locals.token = token;
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
