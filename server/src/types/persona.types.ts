import { Persona, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type PersonaType = Persona


export {prisma, PersonaType}