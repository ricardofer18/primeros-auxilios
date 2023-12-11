import { DocumentoService } from "../services/documento.service";
import { Request, Response } from "express";

const documentoService = new DocumentoService()

export class DocumentoController{
  constructor () {}

  getDocumentoById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const documento = await documentoService.findOne(id)
      res.json({ success: true, data: documento })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }

  uploadDocumento = async (req: Request, res: Response) => {
    try {
      const data = req.body
      const documento = await documentoService.create(data)
      res.json({ success: true, data: documento })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  }
  
}