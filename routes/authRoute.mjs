import { Router } from 'express';
import authController from '../controllers/authControllers.mjs';
const router = Router();

router.post("/register" , authController.registerUser)
router.post("/login" , authController.login)

export default router;