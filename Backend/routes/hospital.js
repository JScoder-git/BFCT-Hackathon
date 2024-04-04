import express from 'express';
import { createHospital, getAllHospitals, getHospitalsByResourceAndDistrict } from '../controllers/hospitalCOntroller.js';

const router = express.Router();

router.post('/', createHospital);
router.get('/', getAllHospitals);
router.get('/search', getHospitalsByResourceAndDistrict);

export default router;
