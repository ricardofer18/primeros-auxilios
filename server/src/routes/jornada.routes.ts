import { Router } from "express"
import { JornadaController } from "../controllers/jornada.controller"

const jornadaController = new JornadaController()
const jornadaRouter = Router()

jornadaRouter.get("/", jornadaController.getAllJornadas)

export default jornadaRouter
