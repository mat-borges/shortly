import {
  checkEmailExists,
  generateToken,
  sessionExists,
  signInSchemaValidation,
  signUpSchemaValidation,
  verifyUserCredentials,
} from '../middlewares/authMiddleware.js';
import { getTest, postSignIn, postSignUp } from '../controllers/authController.js';

import { Router } from 'express';

const router = Router();

router.post(`/signUp`, signUpSchemaValidation, checkEmailExists, postSignUp);
router.post(`/signIn`, signInSchemaValidation, verifyUserCredentials, sessionExists, generateToken, postSignIn);
router.get(`/test`, getTest);

export default router;
