import { connection } from '../db/db.js';

async function insertShortUrl(url, shortUrl, user_id) {
  return connection.query(`INSERT INTO urls (url, "shortUrl", user_id) VALUES ($1, $2, $3);`, [
    url,
    shortUrl,
    user_id,
  ]);
}

async function getUrl(id) {
  return connection.query(`SELECT * FROM urls WHERE id=$1`, [id]);
}

async function getUrlByShort(shortUrl) {
  return connection.query(`SELECT id, url, "visitCount" FROM urls WHERE "shortUrl"=$1`, [shortUrl]);
}

async function updateVisitCount(visitCount, id) {
  return connection.query(`UPDATE urls SET "visitCount"=$1 WHERE id=$2`, [visitCount + 1, id]);
}

async function deleteShortUrl(id) {
  return connection.query(`DELETE FROM urls WHERE id=$1`, [id]);
}

const urlRepository = {
  insertShortUrl,
  getUrl,
  getUrlByShort,
  updateVisitCount,
  deleteShortUrl,
};

export default urlRepository;
