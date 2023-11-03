import { Router } from "express"
import { PacienteController } from "../controllers/paciente.controller"

const pacienteRouter = Router()
const pacienteController = new PacienteController()

pacienteRouter
  .get("/", pacienteController.getAllPacientes)
  .get("/:id", pacienteController.getPacienteById)
  .post("/", pacienteController.createPaciente)
  .put("/:id", pacienteController.updatePaciente)
  .get("/:id/fichas", pacienteController.getPacienteWithFichas)

export default pacienteRouter
