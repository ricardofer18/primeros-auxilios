import { Request, Response } from "express"
import { PersonaService } from "../services/persona.service"

const service = new PersonaService()

export class PersonaController {
  constructor() {}

  createPersona = async (req: Request, res: Response) => {
    try {
      const personaData = req.body
      const newPersona = await service.create(personaData)
      res.json({ success: true, data: newPersona })
    } catch (error) {
      res.status(500).json({ success: true, message: error })
    }
  }

  getAllPersonas = async (_req: Request, res: Response) => {
    try {
      const personas = await service.findAll()
      res.json({ success: true, data: personas })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }
}
