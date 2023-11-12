import { Request, Response } from "express"
import { PrevisionService } from "../services/prevision.service"

const previsionService = new PrevisionService()

export class PrevisionController {
  constructor() {}

  getAllPrevisiones = async (_req: Request, res: Response) => {
    try {
      const previsiones = await previsionService.findAllPrevisiones()
      res.json({ success: true, data: previsiones })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }
}
