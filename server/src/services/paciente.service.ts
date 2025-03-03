import {
  PacienteType,
  PacienteWithFichasType,
  PacienteWithPersonaAndPrevisionType,
  PacienteWithPersonaType,
  prisma,
} from "../types/paciente.types"

export class PacienteService {
  constructor() {}

  async findOneByRut(
    run: string
  ): Promise<PacienteWithPersonaAndPrevisionType | null> {
    try {
      const paciente = await prisma.paciente.findFirstOrThrow({
        where: {
          persona: {
            run,
          },
        },
        include: {
          prevision: true,
          persona: true,
          jornada: true,
          plan_estudios: true,
        },
      })
      return paciente
    } catch (error) {
      console.error("Error al buscar paciente por rut", error)
      throw error
    }
  }

  async findAll(): //page: number,
  //size: number
  Promise<PacienteWithPersonaAndPrevisionType[] | null> {
    try {
      //const offset = (page - 1) * size

      const pacientes = await prisma.paciente.findMany({
        include: {
          prevision: true,
          persona: true,
          jornada: true,
          plan_estudios: true,
          ficha: true
        },
        //skip: offset,
        // take: size,
      })
      return pacientes
    } catch (error) {
      console.error("Error al buscar todos los pacientes", error)
      throw error
    }
  }

  async findOnePacienteWithPersonaById(
    id: string
  ): Promise<PacienteWithPersonaType | null> {
    try {
      const pacientePersona = await prisma.paciente.findFirst({
        where: { id },
        include: { persona: true },
      })
      return pacientePersona
    } catch (error) {
      console.error("Error al buscar los datos personales del paciuente", error)
      throw error
    }
  }

  async findPacienteWithFichasById(
    id: string
  ): Promise<PacienteWithFichasType | null> {
    try {
      const pacienteFichas = await prisma.paciente.findFirst({
        where: {
          id,
        },
        include: {
          ficha: {
            include: {
              paciente: {
                include: {
                  persona: true,
                },
              },
              personal: {
                include: {
                  persona: true,
                },
              },
            },
          },
          persona: true,
        },
      })
      return pacienteFichas
    } catch (error) {
      console.error("Error al obtener paciente con las fichas", error)
      throw error
    }
  }

  async findOneById(id: string): Promise<PacienteType | null> {
    try {
      const paciente = await prisma.paciente.findFirst({
        where: {
          id,
        },
        include: { prevision: true, persona: true },
      })
      return paciente
    } catch (error) {
      console.error("Error al buscar un paciente por ID", error)
      throw error
    }
  }

  async create(data: PacienteType): Promise<PacienteType | null> {
    try {
      const newPaciente = await prisma.paciente.create({ data })
      return newPaciente
    } catch (error) {
      console.error("Error al crear nuevo Paciente", error)
      throw error
    }
  }

  async update(id: string, data: PacienteType): Promise<PacienteType | null> {
    try {
      const updatedPaciente = await prisma.paciente.update({
        where: { id },
        data,
      })
      return updatedPaciente
    } catch (error) {
      console.error("Error al actualizar los datos del paciente", error)
      throw error
    }
  }
}
