import { Paciente, PrismaClient, Ficha } from '@prisma/client'

const prisma = new PrismaClient()

type PacienteType = Paciente

type PacienteWithFichasType = Paciente & {
  ficha: Ficha[]
}

export {prisma, PacienteType, PacienteWithFichasType}