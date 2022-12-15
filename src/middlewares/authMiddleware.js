import bcrypt from 'bcrypt';
/* eslint-disable import/extensions */
import { cleanStringData } from '../server.js';
import { connection } from '../db/db.js';
import dayjs from 'dayjs';
import { signUpSchema } from '../models/authSchemas.js';
import { users } from '../mocks/usersMock.js';

export function signUpSchemaValidation(req, res, next) {
  const { name, email, password } = req.body;
  const user = {
    name: cleanStringData(name),
    email: cleanStringData(email),
    password: cleanStringData(password),
  };
  const { error } = signUpSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    res.status(422).send({ message: errors });
  } else {
    const hashPassword = bcrypt.hashSync(password, 12);
    console.log(hashPassword);
    res.locals.user = { name, email, password: hashPassword };
    next();
  }
}

export async function checkEmailExists(req, res, next) {
  const { email } = res.locals.user;
  try {
    // ! Utilizando MOCK
    for (let user of users) {
      console.log(user.email, email);
      if (user.email === email) {
        return res.sendStatus(409);
      }
    }
    console.log(dayjs().valueOf());
    // ! ATÉ AQUI
    //   const emailExists = await connection.query(`SELECT * FROM users WHERE email=$1`, [email]);

    //  if (emailExists.rows[0]) {
    //    res.sendStatus(409);
    //  } else {
    //    next();
    //  }
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
