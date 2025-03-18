const express = require("express");
const router = express.Router();
const leadController = require("../controllers/leadController");

router.post("/", leadController.createLead); // Create a lead
router.get("/", leadController.getLeads); // Get all leads
router.put("/:id", leadController.updateLead); // Update lead
router.delete("/:id", leadController.deleteLead); // Delete lead

modules.export = router;