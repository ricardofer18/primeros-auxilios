import { PersonaType, prisma } from "../types/persona.types"

export class PersonaService {
  constructor() {}

  async findAll(): Promise<PersonaType[] | null> {
    try {
      const personas = await prisma.persona.findMany()
      return personas
    } catch (error) {
      console.error("Error al buscar todas las personas", error)
      throw error
    }
  }

  async findOneById(id: string): Promise<PersonaType | null> {
    try {
      const persona = await prisma.persona.findFirst({where: {
        id
      }})
      return persona
    } catch (error) {
      console.error('Error al encontrar persona por id', error)
      throw error
    }
  }

  async create(data: PersonaType): Promise<PersonaType | null> {
    try {
      const newPersona = prisma.persona.create({ data })
      return newPersona
    } catch (error) {
      console.error("Error al crear una persona", error)
      throw error
    }
  }
}
