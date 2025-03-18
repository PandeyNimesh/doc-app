import mongoose from "mongoose";

// THOUGHT are we adding repetative lead thing?
const leadSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    contact:{
      type:Number,
      required:false,
      trim: true,
    },
    speciality: {
      type: String,
      enum: [
        "General Physician",
        "Gynecologist",
        "Dermatologist",
        "Pediatrician",
        "Neurologist",
        "Gastroenterologist",
      ],
      required: true,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "converted", "unqualified"],
      default: "new",
    },
    source: {
      type: String,
      enum: ["website", "referral", "ad", "social_media", "other"],
      default: "website",
    },
    score: {
      type: Number,
      min: 0,
      max: 100,
      default: 0, // AI can update this based on lead behavior
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Doctor or admin assigned to follow up
    },
  },
  { timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);
export default Lead; 