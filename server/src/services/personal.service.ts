import { PersonalType, prisma } from "../types/personal.types"

export class PersonalService {
  constructor() {}

  async findAll(): Promise<PersonalType[] | null> {
    try {
      const personal = prisma.personal.findMany()
      return personal
    } catch (error) {
      console.error("Error al buscar personal: ", error)
      throw error
    }
  }

  async findOneById(id: string): Promise<PersonalType | null> {
    try {
      const personal = prisma.personal.findFirst({ where: { id } })
      return personal
    } catch (error) {
      console.error("Error al buscar personal: ", error)
      throw error
    }
  }

  async create(data: PersonalType): Promise<PersonalType | null> {
    try {
      const newPersonal = prisma.personal.create({ data })
      return newPersonal
    } catch (error) {
      console.error("Error al crear personal", error)
      throw error
    }
  }
}
