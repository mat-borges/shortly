import {
  checkEmailExists,
  generateToken,
  sessionExists,
  signInSchemaValidation,
  signUpSchemaValidation,
  verifyUserCredentials,
} from '../middlewares/authMiddleware.js';
import { deleteSignOut, postSignIn, postSignUp } from '../controllers/authController.js';
import { validateToken, verifySession } from '../middlewares/verifyAuthorizationMiddleware.js';

import { Router } from 'express';

const router = Router();

router.post(`/signUp`, signUpSchemaValidation, checkEmailExists, postSignUp);
router.post(`/signIn`, signInSchemaValidation, verifyUserCredentials, sessionExists, generateToken, postSignIn);
router.delete(`/signOut`, validateToken, verifySession, deleteSignOut);

export default router;
