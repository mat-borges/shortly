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

export async function getUrlById(req, res) {
  const id = parseInt(req.params.id);

  try {
    const url = await connection.query(`SELECT * FROM urls WHERE id=$1`, [id]);
    if (!url.rows[0]) {
      return res.sendStatus(404);
    } else {
      const body = { id, shortUrl: url.rows[0].shortUrl, url: url.rows[0].url };
      return res.send(body);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function openShortUrl(req, res) {
  const { shortUrl } = req.params;
  try {
    const urlExist = await connection.query(`SELECT url FROM urls WHERE "shortUrl"=$1`, [shortUrl]);
    if (!urlExist.rows[0]) {
      return res.sendStatus(404);
    } else {
      const url = urlExist.rows[0].url;
      return res.redirect(url);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function deleteShortUrl(req, res) {
  res.sendStatus(501);
}
