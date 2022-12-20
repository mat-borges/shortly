import { connection } from '../db/db.js';

export async function getRankings(req, res) {
  try {
    const ranking = await connection.query(`
    SELECT
	    users.id, users.name,
      COUNT(urls.id)::INTEGER AS "linksCount",
      SUM(urls."visitCount")::INTEGER AS "visitCount"
    FROM users
    JOIN urls ON users.id = urls.user_id
    GROUP BY users.id
    ORDER BY "visitCount" DESC
    LIMIT 10;`);
    res.send(ranking.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
