import { Router } from "express"
import { FichaController } from "../controllers/ficha.controller"

const fichaController = new FichaController()
const fichaRouter = Router()

fichaRouter
  .post('/', fichaController.createFicha)
  .get('/', fichaController.getAllFichas)
  .get('/:id', fichaController.getFichaById)

export default fichaRouter