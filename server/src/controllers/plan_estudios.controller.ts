import { Request, Response } from "express"
import { Plan_EstudiosService } from "../services/plan_estudios.service"

const plan_estudiosService = new Plan_EstudiosService()

export class Plan_EstudiosController {
  constructor() {}

  getAllPlanesEstudio = async (_req: Request, res: Response) => {
    try {
      const planes_estudio = await plan_estudiosService.findAll()
      res.json({ success: true, data: planes_estudio })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }
}
