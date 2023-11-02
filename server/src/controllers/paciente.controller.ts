import { Request, Response } from "express"
import { PacienteService } from "../services/paciente.service"

const pacienteService = new PacienteService()

export class PacienteController {
  constructor() {}

  createPaciente = async (req: Request, res: Response) => {
    try {
      
    } catch (error) {
      
    }
  }
}