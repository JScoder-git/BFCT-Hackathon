import Doctor from '../models/doctor.js';

// Create a new doctor
export const createDoctor = async (req, res) => {
  const newDoctor = new Doctor(req.body);
  try {
    const savedDoctor = await newDoctor.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedDoctor,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create doctor",
      error: err.message,
    });
  }
};

// Update a doctor
export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update doctor",
      error: err.message,
    });
  }
};

// Delete a doctor
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete doctor",
      error: err.message,
    });
  }
};

// Get a single doctor by ID
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully found doctor",
      data: doctor,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to find doctor",
      error: err.message,
    });
  }
};

// Get all doctors
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).json({
      success: true,
      message: "Successfully retrieved doctors",
      data: doctors,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve doctors",
      error: err.message,
    });
  }
};
