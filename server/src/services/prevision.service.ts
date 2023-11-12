import { PrevisionType, prisma } from "../types/previsione.type"

export class PrevisionService {
  constructor () {}

  async findAllPrevisiones(): Promise<PrevisionType[] | null> {
    try {
      const previsiones = await prisma.prevision.findMany()
      return previsiones
    } catch (error) {
      console.error("Error al buscar todas las previsiones", error)
      throw error
    }
  }
}