import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    feedbackBy: {
      type: String,
      required: true,
    },
    doctorName: {
      type: String,
      required: true,
    },
    registerNumber: {
      type: String,
      required: true,
    },
    feedbackText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
