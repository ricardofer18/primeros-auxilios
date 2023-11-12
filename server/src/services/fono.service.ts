import { FonoType, prisma } from "../types/fono.types"

export class FonoService {
  constructor() {}

  async findPacienteFonosById(id: string): Promise<FonoType[] | null> {
    try {
      const fonos = await prisma.fono.findMany({
        where: {
          persona: {
            paciente: {
              id,
            },
          },
        },
      })
      return fonos
    } catch (error) {
      console.error("Error al buscar todos los fonos", error)
      throw error
    }
  }

  async createFono(data: FonoType): Promise<FonoType | null> {
    try {
      const newFono = await prisma.fono.create({data})
      return newFono
    } catch(error) {
      console.error("Error al crear un fono", error)
      throw error
    }
  }

}
