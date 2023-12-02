import { Request, Response } from "express"
import { PacienteService } from "../services/paciente.service"
import { PersonaService } from "../services/persona.service"
import { FonoService } from "../services/fono.service"
import uuid4 from "uuid4"

const pacienteService = new PacienteService()
const personaService = new PersonaService()
const fonoService = new FonoService()

interface PersonaData {
  id: string
  nombres: string
  run: string
  primer_apellido: string
  segundo_apellido: string
  correo: string
}

interface FonoData {
  id: string
  numero: string
  persona_id: string
}

interface PacienteData {
  id: string
  fecha_nacimiento: string
  jornada_id: string
  plan_estudios_id: string
  semestre: string
  ucm: boolean
  seguro_MOK: boolean
  prevision_id: string
  persona_id: string
}

export class PacienteController {
  constructor() {}

  async createPaciente(req: Request, res: Response) {
    try {
      const {
        nombres,
        run,
        primer_apellido,
        segundo_apellido,
        correo,
        numero,
        fecha_nacimiento,
        jornada_id,
        plan_estudios_id,
        semestre,
        ucm,
        seguro_MOK,
        prevision_id,
      } = req.body

      const personaData: PersonaData = {
        id: uuid4(),
        nombres,
        run,
        primer_apellido,
        segundo_apellido,
        correo,
      }

      const newPersona = (await personaService.create(personaData)) as {
        id: string
        nombres: string
        primer_apellido: string
        segundo_apellido: string
        correo: string
        run: string
      } | null

      if (!newPersona) {
        res
          .status(500)
          .json({ success: false, message: "Error al crear persona" })
        return
      }

      const fonoData: FonoData = {
        id: uuid4(),
        numero,
        persona_id: newPersona.id,
      }

      await fonoService.createFono(fonoData)

      const pacienteData: PacienteData = {
        id: uuid4(),
        fecha_nacimiento,
        jornada_id,
        plan_estudios_id,
        semestre,
        ucm,
        seguro_MOK,
        prevision_id,
        persona_id: newPersona.id,
      }

      const newPaciente = await pacienteService.create(pacienteData)

      res.json({ success: true, data: newPaciente })
    } catch (error) {
      console.error(error)
      res
        .status(500)
        .json({ success: false, message: "Error interno del servidor" })
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

  getAllPacientes = async (_req: Request, res: Response) => {
    try {
      //const { page = 1, size = 3 } = req.query

      const pacientes = await pacienteService.findAll(/*+page, +size*/)
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
