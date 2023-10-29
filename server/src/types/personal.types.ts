import { PrismaClient, Personal, Ficha } from '@prisma/client';

const prisma = new PrismaClient()

type PersonalType = Personal

type PersonalTypeWithFichas = Personal & {
  fichas: Ficha[]
}

export {PersonalType, prisma, PersonalTypeWithFichas}