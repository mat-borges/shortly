import { connection } from '../db/db.js';

export async function getUser(req, res) {
  const { user_id } = res.locals.user;

  try {
    const user = await connection.query(
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
    res.send(user.rows[0]);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
