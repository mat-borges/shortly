import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import sessionRepository from '../repositories/sessionRepository.js';

dotenv.config();

export async function validateToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace(`Bearer `, ``);

  try {
    const { user_id, name, email } = jwt.verify(token, process.env.SECRET);
    res.locals.token = token;
    res.locals.user = { user_id, name, email };
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
}

export async function verifySession(req, res, next) {
  const { token } = res.locals;

  try {
    const session = await sessionRepository.getSessionByToken(token);
    if (!session.rows[0]) {
      res.sendStatus(401);
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
