import userController from "../controllers/userController.mjs";
import middlewareController from "../controllers/middlewareController.mjs";
import { Router } from "express";

const router = Router();

router.get('/' , userController.getAllusers)
router.get('/:id' , userController.getOneuser)

router.delete('/delete/:id',  userController.deleteUser)


router.get('/detail/:id',middlewareController.verifyTokenmy, userController.getOneuser)
router.patch('/update/:id' ,  userController.updateUser)

router.post('/medical/:idPatient' ,userController.registerMedical)

export default router

