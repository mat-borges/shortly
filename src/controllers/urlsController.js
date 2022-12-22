import { nanoid } from 'nanoid';
import urlRepository from '../repositories/urlRepository.js';

export async function postShortUrl(req, res) {
  const { url } = res.locals;
  const { user_id } = res.locals.user;
  const shortUrl = nanoid(12);

  try {
    await urlRepository.insertShortUrl(url, shortUrl, user_id);
    res.send({ shortUrl });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getUrlById(req, res) {
  const id = parseInt(req.params.id);

  try {
    const url = await urlRepository.getUrl(id);
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
    const urlExist = await urlRepository.getUrlByShort(shortUrl);
    if (!urlExist.rows[0]) {
      return res.sendStatus(404);
    } else {
      const { url, id, visitCount } = urlExist.rows[0];
      await urlRepository.updateVisitCount(visitCount, id);
      return res.redirect(url);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function deleteShortUrl(req, res) {
  const id = parseInt(res.locals.id);
  try {
    await urlRepository.deleteShortUrl(id);
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
