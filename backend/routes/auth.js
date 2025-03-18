import express from 'express';
import { login, register, verifyEmail, resendVerificationEmail } from '../controllers/authController.js';

const router = express.Router();

// Route to login
router.post('/login', login);

// Route to register
router.post('/register', register);

// Route to verify email
router.post('/verify-email', verifyEmail);

// Route to resend email verification
router.post('/resend-verification-email', resendVerificationEmail);

export default router;