import { cleanStringData } from '../server.js';
import { connection } from '../db/db.js';
import urlRepository from '../repositories/urlRepository.js';
import { urlSchema } from '../models/urlSchema.js';

export async function validateUrlSchema(req, res, next) {
  const receivedUrl = req.body.url;
  const url = cleanStringData(receivedUrl);
  const { error } = urlSchema.validate(url, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    res.status(422).send({ message: errors });
  } else {
    res.locals.url = url;
    next();
  }
}

export async function verifyUrlUser(req, res, next) {
  const id = parseInt(req.params.id);
  const user_id = parseInt(res.locals.user.user_id);
  try {
    const url = await urlRepository.getUrl(id);
    if (!url.rows[0]) {
      return res.sendStatus(404);
    } else if (url.rows[0]?.user_id !== user_id) {
      return res.sendStatus(401);
    } else {
      res.locals.id = id;
      next();
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
