import OTP from '../models/otpModel.js';
import fetch from 'node-fetch';

const MAILERSEND_API_KEY = process.env.MAILSENDER_API || "";

export async function verifyOTP(email, otp) {
    const otpEntry = await OTP.findOne({ email, otp });

    if (!otpEntry) {
        throw new Error('Invalid or expired OTP');
    }

    // OTP is valid, send welcome email
    const mailOptions = {
        from: 'your-email@example.com',
        to: email,
        subject: 'Welcome!',
        text: 'Your email has been successfully verified. Welcome!'
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

    // Optionally, delete the OTP entry after successful verification
    await OTP.deleteOne({ email, otp });
}
