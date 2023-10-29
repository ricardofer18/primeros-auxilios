import { PersonaType, prisma } from "../types/persona.types";

export class PersonaService {
  constructor () {}

  async create(data: PersonaType):Promise<PersonaType | null> {
    try {
      const newPersona = prisma.persona.create({ data })
      return newPersona
    } catch (error) {
      console.error('Error al crear una persona', error)
      throw error
    }
  }
}