import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '15m' } // OTP expires after 15 minutes
});

export default mongoose.model('OTP', otpSchema);
