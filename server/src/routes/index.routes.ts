import {Router, Application } from "express";
import authRouter from "./auth.routes";
import personaRouter from "./persona.routes";
import authenticateToken from "../middlewares/auth.middleware";

const routerApi = (app: Application) => {
  const router = Router()

  app.use('/api/v1', router)

  router.use('/auth', authRouter)
  router.use('/personas', authenticateToken, personaRouter)

  return router
}

export default routerApi