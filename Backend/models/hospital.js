import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema(
  {
    district: {
      type: String,
      required: true,
    },
    hospitalName: {
      type: String,
      required: true,
    },
    resources: {
      lungs: {
        type: Boolean,
        default: false,
      },
      kidney: {
        type: Boolean,
        default: false,
      },
      eyes: {
        type: Boolean,
        default: false,
      },
      heart: {
        type: Boolean,
        default: false,
      },
      liver: {
        type: Boolean,
        default: false,
      },
      bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Hospital = mongoose.model("Hospital", HospitalSchema);

export default Hospital;
