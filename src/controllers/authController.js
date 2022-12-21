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
  const { user_id, name, email } = res.locals.user;

  try {
    res.send({ token, user_id, name, email });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function deleteSignOut(req, res) {
  const { token } = res.locals;
  try {
    await connection.query(`UPDATE sessions SET status='closed' WHERE token=$1;`, [token]);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
