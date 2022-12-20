import { cleanStringData } from '../server.js';
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
