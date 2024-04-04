import express from 'express';
import { createEquipment, updateEquipment, deleteEquipment, getSingleEquipment, getAllEquipments } from '../controllers/equipments.js';

const router = express.Router();

router.post('/', createEquipment);
router.get('/', getAllEquipments);
router.get('/:id', getSingleEquipment);
router.put('/:id', updateEquipment);
router.delete('/:id', deleteEquipment);

export default router;
