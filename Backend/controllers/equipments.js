import Equipment from '../models/equipments.js';

// Create a new equipment
export const createEquipment = async (req, res) => {
  const newEquipment = new Equipment(req.body);
  try {
    const savedEquipment = await newEquipment.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedEquipment,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create equipment",
      error: err.message,
    });
  }
};

// Update an equipment
export const updateEquipment = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedEquipment = await Equipment.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedEquipment,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update equipment",
      error: err.message,
    });
  }
};


// Delete an equipment
export const deleteEquipment = async (req, res) => {
  const id = req.params.id;
  try {
    await Equipment.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete equipment",
      error: err.message,
    });
  }
};


// Get a single equipment by ID
export const getSingleEquipment = async (req, res) => {
  const id = req.params.id;
  try {
    const equipment = await Equipment.findById(id);
    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: "Equipment not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully found equipment",
      data: equipment,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to find equipment",
      error: err.message,
    });
  }
};

// Get all equipments
export const getAllEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.find({});
    res.status(200).json({
      success: true,
      message: "Successfully retrieved equipments",
      data: equipments,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve equipments",
      error: err.message,
    });
  }
};
