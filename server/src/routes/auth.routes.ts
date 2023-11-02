import { Router } from "express"
import { AuthController } from '../auth/auth.controller';

const authController = new AuthController()
const authRouter = Router()

authRouter
  .post('/login', authController.handleLogin)

export default authRouter