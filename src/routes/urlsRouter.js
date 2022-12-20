import { deleteShortUrl, getUrlsById, openShortUrl, postShortUrl } from '../controllers/urlsController.js';

import { Router } from 'express';
import { validateUrlSchema } from '../middlewares/urlsMiddleware.js';
import { verifyHeadersAuthorization } from '../middlewares/verifyAuthorizationMiddleware.js';

const router = Router();

router.post(`/urls/shorten`, verifyHeadersAuthorization, validateUrlSchema, postShortUrl);
router.get(`/urls/:id`, getUrlsById);
router.get(`/urls/open/:shortUrl`, openShortUrl);
router.delete(`urls/:id`, deleteShortUrl);

export default router;
