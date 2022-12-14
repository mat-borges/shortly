/* eslint-disable import/order */
/* eslint-disable import/extensions */
import { deleteShortUrl, getUrlsById, openShortUrl, postShortUrl } from '../controllers/urls.Controller.js';

import { Router } from 'express';

const router = Router();

router.post(`/urls/shorten`, postShortUrl);
router.get(`/urls/:id`, getUrlsById);
router.get(`/urls/open/:shortUrl`, openShortUrl);
router.delete(`urls/:id`, deleteShortUrl);

export default router;
