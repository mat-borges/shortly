import { deleteShortUrl, getUrlById, openShortUrl, postShortUrl } from '../controllers/urlsController.js';

import { Router } from 'express';
import { validateUrlSchema } from '../middlewares/urlsMiddleware.js';
import { verifyAuthorization } from '../middlewares/verifyAuthorizationMiddleware.js';

const router = Router();

router.post(`/urls/shorten`, verifyAuthorization, validateUrlSchema, postShortUrl);
router.get(`/urls/:id`, getUrlById);
router.get(`/urls/open/:shortUrl`, openShortUrl);
router.delete(`urls/:id`, verifyAuthorization, deleteShortUrl);

export default router;
