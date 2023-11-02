import { PrismaClient, Personal, Ficha } from '@prisma/client';

import { AuthType } from "./auth.types"
import { PersonaType } from "./persona.types"

const prisma = new PrismaClient()

type PersonalType = Personal

type PersonalTypeWithFichas = Personal & {
  fichas: Ficha[]
}

type PersonalTypeWithAuth = Personal & {
  auth: AuthType | null
  persona: PersonaType 
}

type PersonalTypeWithPersona = Personal & {
  persona: PersonaType 
}

export {
  PersonalType,
  prisma,
  PersonalTypeWithFichas,
  PersonalTypeWithAuth,
  PersonalTypeWithPersona,
}
