import { Request, Response } from "express"
import { JornadaService } from "../services/jornada.service"

const jornadaService = new JornadaService()

export class JornadaController {
  constructor() {}

  getAllJornadas = async (_req: Request, res: Response) => {
    try {
      const jornadas = await jornadaService.findAll()
      res.json({ success: true, data: jornadas })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }
}
