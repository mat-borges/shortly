import { deleteShortUrl, getUrlById, openShortUrl, postShortUrl } from '../controllers/urlsController.js';
import { validateUrlSchema, verifyUrlUser } from '../middlewares/urlsMiddleware.js';

import { Router } from 'express';
import { verifyAuthorization } from '../middlewares/verifyAuthorizationMiddleware.js';

const router = Router();

router.post(`/urls/shorten`, verifyAuthorization, validateUrlSchema, postShortUrl);
router.get(`/urls/:id`, getUrlById);
router.get(`/urls/open/:shortUrl`, openShortUrl);
router.delete(`/urls/:id`, verifyAuthorization, verifyUrlUser, deleteShortUrl);

export default router;
