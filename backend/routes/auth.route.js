import { sendOtp } from '../controllers/auth.controllers.js';
import express from 'express';

const router = express.Router();


// Sending OTP
router.post('/sendOtp', sendOtp)



export default router;