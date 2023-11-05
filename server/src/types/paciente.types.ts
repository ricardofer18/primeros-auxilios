import { Paciente, PrismaClient, Ficha, Prevision } from "@prisma/client"
import { PersonaType } from "./persona.types"

const prisma = new PrismaClient()

type PacienteType = Paciente

type PacienteWithFichasType = PacienteType & {
  ficha: Ficha[]
}

type PacienteWithFichasAndPersonaType = PacienteType & {
  ficha: Ficha[]
  persona: PersonaType
}

type PacienteWithPersonaType = PacienteType & {
  persona: PersonaType
}

type PacienteWithPersonaAndPrevisionType = PacienteType & {
  persona: PersonaType
  prevision: Prevision
}

export {
  prisma,
  PacienteType,
  PacienteWithFichasType,
  PacienteWithFichasAndPersonaType,
  PacienteWithPersonaType,
  PacienteWithPersonaAndPrevisionType
}
