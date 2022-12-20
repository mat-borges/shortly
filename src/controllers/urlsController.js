import { connection } from '../db/db.js';
import { nanoid } from 'nanoid';

export async function postShortUrl(req, res) {
  const { url, user_id } = res.locals;
  const shortUrl = nanoid(12);

  try {
    await connection.query(`INSERT INTO urls (url, "shortUrl", user_id) VALUES ($1, $2, $3);`, [
      url,
      shortUrl,
      user_id,
    ]);
    res.send({ shortUrl });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getUrlsById(req, res) {
  res.sendStatus(501);
}

export async function openShortUrl(req, res) {
  res.sendStatus(501);
}

export async function deleteShortUrl(req, res) {
  res.sendStatus(501);
}
