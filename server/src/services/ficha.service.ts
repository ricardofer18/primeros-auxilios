import {
  FichaType,
  prisma,
  FichaWithPersonaAndPersonal,
} from "../types/ficha.types"

export class FichaService {
  constructor() {}

  async findAll(/*page: number, size: number*/): Promise<
    FichaWithPersonaAndPersonal[]
  > {
    try {
      //const offset = (page - 1) * size

      const fichas = prisma.ficha.findMany({
        //skip: offset,
        //take: size,
        include: {
          personal: {
            include: {
              persona: true,
            },
          },
          paciente: {
            include: {
              persona: true,
            },
          },
        },
      })
      return fichas
    } catch (error) {
      console.error("Error al buscar todas las fichas", error)
      throw error
    }
  }

  async findOneById(id: string): Promise<FichaType | null> {
    try {
      const ficha = prisma.ficha.findFirst({ where: { id } })
      return ficha
    } catch (error) {
      console.error("No se ha podido encontrar la ficha", error)
      throw error
    }
  }

  async create(data: FichaType): Promise<FichaType | null> {
    try {
      const newFicha = prisma.ficha.create({ data })
      return newFicha
    } catch (error) {
      console.error("Error al crear ficha", error)
      throw error
    }
  }
}
