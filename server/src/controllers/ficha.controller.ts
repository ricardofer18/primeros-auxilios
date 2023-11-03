import { Request, Response } from "express"
import { FichaService } from "../services/ficha.service"

const service = new FichaService()

export class FichaController {
  constructor () {}

  async createFicha (req: Request, res: Response) {
    try {
      const fichaData = req.body
      const newFicha = await service.create(fichaData)
      res.json({ success: true, data: newFicha })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }

  async getAllFichas (_req: Request, res: Response) {
    try {
      const fichas = await service.findAll()
      res.json({ success: true, data: fichas })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }

  async getFichaById (req: Request, res: Response) {
    try {
      const id = req.params.id
      const ficha = await service.findOneById(id)
      res.json({ success: true, data: ficha })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }

}