import Feedback from '../models/feedback.js';

// Create a new feedback
export const createFeedback = async (req, res) => {
  try {
    const newFeedback = await Feedback.create(req.body);
    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      data: newFeedback,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to submit feedback",
      error: err.message,
    });
  }
};

// Get all feedbacks
export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({});
    res.status(200).json({
      success: true,
      message: "Successfully retrieved feedbacks",
      data: feedbacks,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve feedbacks",
      error: err.message,
    });
  }
};

// Get a single feedback by ID
export const getSingleFeedback = async (req, res) => {
  const id = req.params.id;
  try {
    const feedback = await Feedback.findById(id);
    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully found feedback",
      data: feedback,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to find feedback",
      error: err.message,
    });
  }
};

// Delete a feedback
export const deleteFeedback = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(id);
    if (!deletedFeedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Feedback deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete feedback",
      error: err.message,
    });
  }
};
