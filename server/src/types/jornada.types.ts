import { Jornada, Paciente, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type JornadaType = Jornada

type JornadaTypeWithPaciente = JornadaType & {
  paciente: Paciente
}

export {prisma, JornadaTypeWithPaciente, JornadaType}