import { Request, Response } from "express"
import { PacienteService } from "../services/paciente.service"

const pacienteService = new PacienteService()

export class PacienteController {
  constructor() {}

  createPaciente = async (req: Request, res: Response) => {
    try {
      const pacienteData = req.body
      const newPaciente = await pacienteService.create(pacienteData)
      res.json({ success: true, data: newPaciente })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }

  updatePaciente = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const pacienteData = req.body
      const updatedPaciente = await pacienteService.update(id, pacienteData)
      res.json({ success: true, data: updatedPaciente })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }

  getAllPacientes = async (req: Request, res: Response) => {
    try {
      const { page = 1, size = 3 } = req.query

      const pacientes = await pacienteService.findAll(+page, +size)
      res.json({ success: true, data: pacientes })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }

  getPacienteById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const paciente = await pacienteService.findOnePacienteWithPersonaById(id)
      res.json({ success: true, data: paciente })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }

  getPacienteByRut = async (req: Request, res: Response) => {
    try {
      const run = req.params.run
      const paciente = await pacienteService.findOneByRut(run)
      res.json({ success: true, data: paciente })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }

  getPacienteWithFichas = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const paciente = await pacienteService.findPacienteWithFichasById(id)
      res.json({ success: true, data: paciente })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }
}
