import { Plan_EstudiosType, prisma } from "../types/plan_estudios.types"

export class Plan_EstudiosService {
  constructor() {}

  async findAll(): Promise<Plan_EstudiosType[] | null> {
    try {
      const plan_estudios = prisma.plan_Estudios.findMany()
      return plan_estudios
    } catch (error) {
      console.error("Error al buscar los planes de estudio", error)
      throw error
    }
  }
}
