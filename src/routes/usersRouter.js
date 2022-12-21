import { validateToken, verifySession } from '../middlewares/verifyAuthorizationMiddleware.js';

import { Router } from 'express';
import { getUser } from '../controllers/userController.js';

const router = Router();

router.get(`/users/me`, validateToken, verifySession, getUser);

export default router;
