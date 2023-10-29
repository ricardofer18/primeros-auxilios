import express from "express"
import cors from "cors"
import morgan from 'morgan'

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: "*",
  })
)
app.use(morgan('combined'))

const PORT = 5000

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto: " + PORT)
})