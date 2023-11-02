import {
  PersonalType,
  PersonalTypeWithAuth,
  PersonalTypeWithPersona,
  prisma,
} from "../types/personal.types"

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

  async findOneWithAuthById(id: string): Promise<PersonalTypeWithAuth | null> {
    try {
      const personalAuth = await prisma.personal.findFirst({
        where: { id },
        include: { auth: true, persona: true },
      })
      return personalAuth
    } catch (error) {
      console.error("Error en la búsqueda de personal:", error)
      throw error
    }
  }

  async findOneWithAuthByEmail(
    email: string
  ): Promise<PersonalTypeWithAuth | null> {
    try {
      const personalAuth = await prisma.personal.findFirst({
        where: { persona: { correo: email } },
        include: { auth: true, persona: true },
      })
      return personalAuth
    } catch (error) {
      console.error("Error en la búsqueda de personal:", error)
      throw error
    }
  }

  async findPersonalWithPersonaById(
    id: string
  ): Promise<PersonalTypeWithPersona | null> {
    try {
      const personalPersona = await prisma.personal.findFirst({
        where: { id },
        include: { persona: true },
      })
      return personalPersona
    } catch (error) {
      console.error("Error al encontrar datos personales del personal", error)
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
