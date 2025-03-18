import OTP from '../models/otpModel.js';
import crypto from 'crypto';
import fetch from 'node-fetch';

const MAILERSEND_API_KEY = process.env.MAILSENDER_API || "";

function generateOTP() {
    return crypto.randomBytes(3).toString('hex'); // Generates a 6-character OTP
}

export async function sendOTP(email) {
    const otp = generateOTP();
    const otpEntry = new OTP({ email, otp });
    await otpEntry.save();

    const mailOptions = {
        from: 'your-email@example.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`
    };

    await fetch('https://api.mailersend.com/v1/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${MAILERSEND_API_KEY}`
        },
        body: JSON.stringify({
            from: { email: mailOptions.from },
            to: [{ email: mailOptions.to }],
            subject: mailOptions.subject,
            text: mailOptions.text
        })
    });
}
