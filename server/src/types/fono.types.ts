import { PrismaClient, Fono } from "@prisma/client"

const prisma = new PrismaClient()

type FonoType = Fono

export { FonoType, prisma }
