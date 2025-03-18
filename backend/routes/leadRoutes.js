import express from "express";
import leadController from "../controllers/leadController.js"; // Ensure correct file extension

const router = express.Router();

router.post("/", leadController.createLead); // Create a lead
router.get("/", leadController.getLeads); // Get all leads
router.put("/:id", leadController.updateLead); // Update lead
router.delete("/:id", leadController.deleteLead); // Delete lead

export default router;