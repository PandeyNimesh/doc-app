import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";
import leadRouter from "./routes/leadRoutes.js"; 

// App Config
const app = express();
const PORT = process.env.PORT; 

// Connect to Database & Cloud Services
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API Endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);
app.use("/api/leads", leadRouter); 

// Root Endpoint
app.get("/", (req, res) => {
  res.send("API Working!");
});

// Start Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));