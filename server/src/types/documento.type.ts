import { PrismaClient, Documento } from "@prisma/client"
import { PacienteWithPersonaAndPrevisionType } from "./paciente.types"

const prisma = new PrismaClient()

type DocumentoType = Documento

type DocumentoWithPacientePersona = DocumentoType & {
  paciente: PacienteWithPersonaAndPrevisionType
}

export { DocumentoType, DocumentoWithPacientePersona, prisma }
