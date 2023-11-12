import { Router } from "express"
import { FonoController } from '../controllers/fono.controller';

const fonoController = new FonoController()
const fonoRouter = Router()

fonoRouter
  .post('/', fonoController.createFono)

export default fonoRouter