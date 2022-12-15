// eslint-disable import/no-cycle

import { checkEmailExists, signUpSchemaValidation } from '../middlewares/authMiddleware.js';
import { postSignIn, postSignUp } from '../controllers/authController.js';

import { Router } from 'express';

const router = Router();

router.post(`/signUp`, signUpSchemaValidation, checkEmailExists, postSignUp);
router.post(`/signIn`, postSignIn);

export default router;
