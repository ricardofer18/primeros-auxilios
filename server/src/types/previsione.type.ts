import { Prevision, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type PrevisionType = Prevision

export { prisma, PrevisionType }
