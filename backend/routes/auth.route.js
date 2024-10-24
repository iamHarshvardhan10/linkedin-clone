import { sendOtp, signup } from '../controllers/auth.controllers.js';
import express from 'express';

const router = express.Router();


// Sending OTP
router.post('/sendOtp', sendOtp)
// singup route
router.post("/signup", signup)


export default router;