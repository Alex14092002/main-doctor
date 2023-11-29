import MedicalController from "../controllers/medicalController.mjs";
import {Router} from 'express'
import upload from '../utils/multerConfig.mjs';

const router = Router()

router.get('/' , MedicalController.getAllMedical)
router.delete('/delete/:id' , MedicalController.deleteMedical)

export default router