import express from "express";
import { createFeedback, deleteFeedback, getAllFeedbacks, getSingleFeedback } from "../controllers/feedback.js";

const router = express.Router();

// Create a new Feedback
router.post("/", createFeedback);

// Delete a Feedback
router.delete("/:id", deleteFeedback);

// Get a single Feedback
router.get("/:id", getSingleFeedback);

// Get all Feedbacks
router.get("/", getAllFeedbacks);

export default router;
