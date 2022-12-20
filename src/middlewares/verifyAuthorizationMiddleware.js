import { connection } from '../db/db.js';

export async function verifyAuthorization(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace(`Bearer `, ``);
  try {
    const session = await connection.query(`SELECT * FROM sessions WHERE token=$1`, [token]);
    if (!session.rows[0]) {
      res.sendStatus(401);
    } else {
      res.locals.user_id = session.rows[0].user_id;
      next();
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
