import User from '../models/User.js';
import { sendVerificationEmail } from '../utils/email.js';

// ...existing code...

export const resendVerificationEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                success: false,
                message: "User not found",
            });
        }

        if (user.isVerified) {
            return res.json({
                success: false,
                message: "Email is already verified",
            });
        }

        await sendVerificationEmail(user);

        res.json({
            success: true,
            message: "Verification email resent",
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message,
        });
    }
};

// ...existing code...