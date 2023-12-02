import { JornadaType, prisma } from "../types/jornada.types"

export class JornadaService {
  constructor() {}

  async findAll(): Promise<JornadaType[] | null> {
    try {
      const jornada = await prisma.jornada.findMany()
      return jornada
    } catch (error) {
      console.error("Error al buscar jornada", error)
      throw error
    }
  }
}
