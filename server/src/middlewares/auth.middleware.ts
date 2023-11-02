import jsonwebtoken from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../configure-env';
import { Request, Response, NextFunction } from 'express';

const jwt = jsonwebtoken

declare module "express" {
  interface Request {
    personal?: any;
  }
}

const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
):any => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res
      .status(401)
      .json({ message: "Token de autenticación no proporcionado" })
  }

  if (ACCESS_TOKEN_SECRET) {
    jwt.verify(token, ACCESS_TOKEN_SECRET, (error, user): any => {
      if (error) {
        console.error("Error al verificar el token:", error)
        return res.status(403).json({ message: "Token no válido" })
      }
      req.personal = user
      next()
    })
  } else {
    console.error(
      "ACCESS_TOKEN_SECRET no está definido en las variables de entorno."
    )
    return res.status(500).json({ message: "Error en el servidor" })
  }
}

export default authenticateToken