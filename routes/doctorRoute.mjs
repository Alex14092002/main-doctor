import doctorController from "../controllers/doctorController.mjs";
import {Router} from 'express'
const router = Router()

router.post('/prescription' , doctorController.prescription)
export default router