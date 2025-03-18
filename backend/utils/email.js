import nodemailer from 'nodemailer';

export const sendVerificationEmail = async (user) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: 'Email Verification',
        text: `Please verify your email by clicking the following link: ${process.env.CLIENT_URL}/verify-email?token=${user.verificationToken}`,
    };

    await transporter.sendMail(mailOptions);
};