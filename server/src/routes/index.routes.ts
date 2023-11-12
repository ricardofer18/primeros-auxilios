import { Router, Application } from "express"
import authRouter from "./auth.routes"
import personaRouter from "./persona.routes"
import pacienteRouter from "./paciente.routes"
import fichaRouter from "./ficha.routes"
import authenticateToken from "../middlewares/auth.middleware"
import fonoRouter from "./fono.routes"
import previsionRouter from "./prevision.routes"

const routerApi = (app: Application) => {
  const router = Router()

  app.use("/api/v1", router)

  router.use("/auth", authRouter)
  router.use("/personas", authenticateToken, personaRouter)
  router.use("/pacientes", authenticateToken, pacienteRouter)
  router.use("/fichas", authenticateToken, fichaRouter)
  router.use("/fonos", authenticateToken, fonoRouter)
  router.use("/previsiones", authenticateToken, previsionRouter)

  return router
}

export default routerApi
