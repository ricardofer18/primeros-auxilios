import { Router } from "express";
import { Plan_EstudiosController } from "../controllers/plan_estudios.controller";

const plan_EstudiosController = new Plan_EstudiosController()
const planRouter = Router()

planRouter.get('/', plan_EstudiosController.getAllPlanesEstudio)

export default planRouter