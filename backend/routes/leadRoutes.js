import express from "express";
import { createLead, deleteLead, getLeads, updateLead } from "../controllers/leadController.js"; 

const router = express.Router();

router.post("/", createLead); // Create a lead
router.get("/", getLeads); // Get all leads
router.put("/:id", updateLead); // Update lead
router.delete("/:id", deleteLead); // Delete lead

export default router;