import { connection } from '../db/db.js';

async function getRankingTen() {
  return connection.query(`
    SELECT
	    users.id, users.name,
      COUNT(urls.id)::INTEGER AS "linksCount",
      SUM(urls."visitCount")::INTEGER AS "visitCount"
    FROM users
    JOIN urls ON users.id = urls.user_id
    GROUP BY users.id
    ORDER BY "visitCount" DESC
    LIMIT 10;`);
}

const rankingRepository = {
  getRankingTen,
};

export default rankingRepository;
