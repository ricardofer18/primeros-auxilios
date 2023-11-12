import { Router } from "express"
import { PrevisionController } from "../controllers/prevision.controller"

const previsionController = new PrevisionController()
const previsionRouter = Router()

previsionRouter
  .get('/', previsionController.getAllPrevisiones)

export default previsionRouter