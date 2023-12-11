import {
  DocumentoType,
  prisma,
  DocumentoWithPacientePersona,
} from "../types/documento.type"
import { Documento } from "@prisma/client"

export class DocumentoService {
  constructor() {}

  async findAll(): Promise<DocumentoType[]> {
    try {
      const documentos = await prisma.documento.findMany()
      return documentos
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async findOne(id: string): Promise<DocumentoType | null> {
    try {
      const documento = await prisma.documento.findFirst({ where: { id } })
      return documento
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async create(data: DocumentoType): Promise<DocumentoType> {
    try {
      const documento = await prisma.documento.create({ data })
      return documento
    } catch (error) {
      console.log(error)
      throw error
    }
  }

}
