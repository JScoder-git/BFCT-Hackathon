import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number, 
      required: true,
    },    
    description: {
      type: String,
      required: true,
    },
    picture: {
      type: String, 
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Equipment", equipmentSchema);
