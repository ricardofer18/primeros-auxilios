import { Request, Response } from "express"
import { PersonalService } from "../services/personal.service"
import bcrypt from "bcrypt"
import { ACCESS_TOKEN_SECRET } from "../configure-env"
import jsonwebtoken from "jsonwebtoken"

const personalService = new PersonalService()
const jwt = jsonwebtoken

export class AuthController {
  constructor() {}

  handleLogin = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ message: "Se requiere Email y contraseña" })
    }
    try {
      const foundPersonal = await personalService.findOneWithAuthByEmail(email)
      if (!foundPersonal)
        return res.status(401).json({ success: false, message: "Unauthorized" })

      const match = await bcrypt.compare(
        password,
        foundPersonal.auth?.password as string
      )

      if (foundPersonal.cuenta_activa == false)
        return res.status(401).json({ success: false, message: "Unauthorized" })

      if (match) {
        if (ACCESS_TOKEN_SECRET) {
          const payload = {
            id: foundPersonal.id,
          }

          const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
            expiresIn: "1h",
          })

          res.json({
            success: true,
            message: `Personal ${foundPersonal.persona.nombres} ${foundPersonal.persona.primer_apellido} ${foundPersonal.persona.segundo_apellido}, ha iniciado sesión correctamente`,
            userData: {
              accessToken: accessToken,
              id: foundPersonal.id,
              datosPersonales: foundPersonal.persona,
            },
          })
        } else {
          res
            .status(500)
            .json({ success: false, message: "Error en el servidor" })
        }
      } else {
        res.status(401).json({
          success: false,
          message: "Credenciales de inicio de sesión incorrectas",
        })
      }
    } catch (error) {
      console.error("Error en el inicio de sesión: ", error)
      res
        .status(500)
        .json({ success: false, message: "Error en el servidor" + error })
    }
  }
}
