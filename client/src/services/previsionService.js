import { API_URL } from "./urls"
import { getToken } from "./pacienteService"

const fetchPrevisiones = async () => {
  try {
    const response = await fetch(API_URL + "/previsiones", {
      headers: {
        Authorization: getToken(),
      },
    })

    if (!response.ok) {
      throw new Error(
        `Error al obtener previsiones. Estado HTTP: ${response.status}`
      )
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error en la solicitud de previsiones: ", error)
    throw error
  }
}

export { fetchPrevisiones }
