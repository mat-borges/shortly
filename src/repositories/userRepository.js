import { connection } from '../db/db.js';

async function registerUser(name, email, password) {
  return connection.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);
}

async function checkEmail(email) {
  return connection.query(`SELECT * FROM users WHERE email=$1`, [email]);
}

async function getUserUrls(user_id) {
  return connection.query(
    `SELECT users.id, users.name,
        SUM(urls."visitCount")::INTEGER AS "visitCount",
        json_agg(
			    json_build_object('id',urls.id,'shortUrl',urls."shortUrl",'url',urls.url,'visitCount',urls."visitCount")
		    ) AS "shortenedUrls"
      FROM users
      JOIN urls ON users.id=urls.user_id
      WHERE users.id=$1
		  GROUP BY users.id;`,
    [user_id]
  );
}

const userRepository = {
  registerUser,
  checkEmail,
  getUserUrls,
};

export default userRepository;
