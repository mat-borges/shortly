import { connection } from '../db/db.js';

export async function postSignUp(req, res) {
  const { name, email, password } = res.locals.user;

  try {
    await connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function postSignIn(req, res) {
  const { token } = res.locals;
  try {
    res.send({ token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getTest(req, res) {
  try {
    const response = await connection.query(`SELECT * FROM sessions;`);
    res.send(response.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
