import { Plan_Estudios, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type Plan_EstudiosType = Plan_Estudios

export { prisma, Plan_EstudiosType }
