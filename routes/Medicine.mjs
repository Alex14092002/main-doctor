import medicineController from "../controllers/Medicine.mjs";
import middlewareController from "../controllers/middlewareController.mjs";
import upload from '../utils/multerConfig.mjs'
import {Router} from 'express'
const router = Router()

router.post('/add' , middlewareController.verifyTokenAdmin , upload.single('image') ,  medicineController.addMedicine)
router.get('/' ,middlewareController.verifyTokenAdmin , medicineController.getAllmedicine)
router.delete('/delete/:id' , middlewareController.verifyTokenAdmin , medicineController.deleteMedicine)
router.patch('/update/:id' , middlewareController.verifyTokenAdmin ,  upload.single('image'),  medicineController.updateMediciner)
router.get('/detail/:id' ,middlewareController.verifyTokenAdmin ,medicineController.getOnemedicine )

export default router