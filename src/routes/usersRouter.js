import { Router } from 'express';
import { getUser } from '../controllers/userController.js';
import { verifyAuthorization } from '../middlewares/verifyAuthorizationMiddleware.js';

const router = Router();

router.get(`/users/me`, verifyAuthorization, getUser);

export default router;
