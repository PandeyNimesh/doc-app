import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  bookAppointment,
  listAppointment,
  cancelAppointment,
  paymentRazorpay,
  verifyRazorpay,
  verifyUserEmail,
} from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/verify", verifyUserEmail);
userRouter.use(authUser);
userRouter.get("/get-profile", getProfile);
userRouter.post(
  "/update-profile",
  upload.single("image"),
  updateProfile
);
userRouter.post("/book-appointment", bookAppointment);
userRouter.get("/appointments", listAppointment);
userRouter.post("/cancel-appointment", cancelAppointment);
userRouter.post("/payment-razorpay", paymentRazorpay);
userRouter.post("/verifyRazorpay", verifyRazorpay);

export default userRouter;
