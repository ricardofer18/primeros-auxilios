import { Router } from "express"
import { PersonaController } from "../controllers/persona.controller"

const personaController = new PersonaController()
const personaRouter = Router()

personaRouter
  .post('/', personaController.createPersona)
  .get('/', personaController.getAllPersonas)
  .get('/:id', personaController.getPersonaById)
  .put('/:id', personaController.updatePersona)

export default personaRouter
