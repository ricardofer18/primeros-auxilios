import { Ficha, PrismaClient} from '@prisma/client'
import { PacienteWithPersonaType } from './paciente.types'
import { PersonalTypeWithPersona } from './personal.types'

const prisma = new PrismaClient()

type FichaType = Ficha

type FichaWithPersonaAndPersonal = FichaType & {
  paciente: PacienteWithPersonaType
  personal: PersonalTypeWithPersona
}

export {prisma, FichaType, FichaWithPersonaAndPersonal}