import { API_URL } from "./urls"
import { getToken } from "./pacienteService"

export const createFicha = async (data) => {
  try {
    const createFicha = await fetch(API_URL + "/fichas", {
      method: "POST",
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!createFicha.ok) {
      throw new Error(
        `Error al crear Ficha. Estado HTTP: ${createFicha.status}`
      )
    }

    const fichaData = await createFicha.json()
    return fichaData
  } catch (error) {
    console.error("Error al crear Ficha:", error)
    throw error
  }
}

export const fetchAllFichas = async () => {
  try {
    const response = await fetch(API_URL + "/fichas", {
      headers: {
        Authorization: getToken(),
      },
    })

    if (!response.ok) {
      throw new Error(
        `Error al obtener fichas. Estado HTTP: ${response.status}`
      )
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error en la solicitud de todos las fichas:", error)
    throw error
  }
}
