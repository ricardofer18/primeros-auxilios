import { Router } from "express"
import { PersonaController } from "../controllers/persona.controller"

const personaController = new PersonaController()
const personaRouter = Router()

personaRouter
  .post('/', personaController.createPersona)
  .get('/', personaController.getAllPersonas)

export default personaRouter
