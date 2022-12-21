import { deleteShortUrl, getUrlById, openShortUrl, postShortUrl } from '../controllers/urlsController.js';
import { validateToken, verifySession } from '../middlewares/verifyAuthorizationMiddleware.js';
import { validateUrlSchema, verifyUrlUser } from '../middlewares/urlsMiddleware.js';

import { Router } from 'express';

const router = Router();

router.post(`/urls/shorten`, validateToken, verifySession, validateUrlSchema, postShortUrl);
router.get(`/urls/:id`, getUrlById);
router.get(`/urls/open/:shortUrl`, openShortUrl);
router.delete(`/urls/:id`, validateToken, verifySession, verifyUrlUser, deleteShortUrl);

export default router;
