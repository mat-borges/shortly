import { connection } from '../db/db.js';

async function closeSession(token) {
  return connection.query(`UPDATE sessions SET status='closed' WHERE token=$1;`, [token]);
}

async function checkSession(email) {
  return connection.query(`SELECT s.*, u.email FROM sessions s JOIN users u ON s.user_id=u.id WHERE u.email=$1`, [
    email,
  ]);
}

async function newSession(user_id, token) {
  return connection.query(`INSERT INTO sessions (user_id, token) VALUES ($1, $2)`, [user_id, token]);
}

async function getSessionByToken(token) {
  return connection.query(`SELECT * FROM sessions WHERE token=$1`, [token]);
}

const sessionRepository = {
  closeSession,
  checkSession,
  newSession,
  getSessionByToken,
};

export default sessionRepository;
