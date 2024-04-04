import Hospital from '../models/hospital.js';

export const createHospital = async (req, res) => {
    const newHospital = new Hospital(req.body);
    try {
        const savedHospital = await newHospital.save();
        res.status(201).json(savedHospital);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getAllHospitals = async (req, res) => {
    try {
        const hospitals = await Hospital.find({});
        res.json(hospitals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getHospitalsByResourceAndDistrict = async (req, res) => {
    const { resource, district } = req.query;
    try {
        const hospitals = await Hospital.find({ district: district, [`resources.${resource}`]: true });
        res.json(hospitals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
