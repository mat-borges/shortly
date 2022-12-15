import { connection } from '../db/db.js';
import { users } from '../mocks/usersMock.js';

export async function postSignUp(req, res) {
  const { name, email, password } = res.locals;

  try {
    // await connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);

    // ! utilizando MOCK
    users.push({ name, email, password });
    // ! ATÉ AQUI

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function postSignIn(req, res) {
  res.sendStatus(501);
}
