import express from "express";
import { createDoctor, deleteDoctor, getAllDoctors, getSingleDoctor, updateDoctor } from "../controllers/doctorController.js";

const router = express.Router();

// Create a new Doctor
router.post("/", createDoctor);

// Update a Doctor
router.put("/:id", updateDoctor);

// Delete a Doctor
router.delete("/:id", deleteDoctor);

// Get a single Doctor
router.get("/:id", getSingleDoctor);

// Get all Doctors
router.get("/", getAllDoctors);

export default router;
