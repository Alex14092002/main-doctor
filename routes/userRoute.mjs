import userController from "../controllers/userController.mjs";
import middlewareController from "../controllers/middlewareController.mjs";
import { Router } from "express";

const router = Router();

router.get('/' , middlewareController.verifyTokenAdmin , userController.getAllusers)

router.delete('/delete/:id', middlewareController.verifyTokenAdmin, userController.deleteUser)


router.get('/detail/:id',middlewareController.verifyTokenmy, userController.getOneuser)
router.patch('/update/:id' , middlewareController.verifyTokenAdmin , userController.updateUser)

router.post('/medical/:idPatient' ,userController.registerMedical)

export default router

