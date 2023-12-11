import { Router } from "express"
import { DocumentoController } from "../controllers/documento.controller"
import multer from "multer"
import mimeTypes from "mime-types"

const storage = multer.diskStorage({
  destination: "docs/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "." + mimeTypes.extension(file.mimetype))
  },
})

const upload = multer({
  storage: storage,
})

const documentoController = new DocumentoController()
const routerDocumento = Router()

routerDocumento
  .get("/:id", documentoController.getDocumentoById)
  .post(
    "/",
    upload.single("documentoPaciente"),
    documentoController.uploadDocumento
  )
