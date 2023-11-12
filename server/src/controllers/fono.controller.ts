import { Request, Response } from "express"
import { FonoService } from "../services/fono.service"

const fonoService = new FonoService()

export class FonoController {
  constructor() {}

  createFono = async (req: Request, res: Response) => {
    try {
      const fonoData = req.body
      const newFono = await fonoService.createFono(fonoData)
      res.json({ success: true, data: newFono })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }
}
