import { Ficha, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type FichaType = Ficha

export {prisma, FichaType}