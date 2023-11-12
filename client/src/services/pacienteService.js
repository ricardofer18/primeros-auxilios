import { API_URL } from "./urls"
import { getToken } from "../utils/getToken"

const fetchPacienteByRut = async (rut) => {
  try {
    const response = await fetch(API_URL + "/pacientes/rut/" + rut, {
      headers: {
        Authorization: getToken(),
      },
    })

    if (!response.ok) {
      throw new Error(
        `Error al obtener paciente por Rut. Estado HTTP: ${response.status}`
      )
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error en la solicitud de paciente por Rut:", error)
    throw error
  }
}

const fetchPacienteById = async (id) => {
  try {
    const response = await fetch(API_URL + "/pacientes/" + id, {
      headers: {
        Authorization: getToken(),
      },
    })

    if (!response.ok) {
      throw new Error(
        `Error al obtener paciente por ID. Estado HTTP: ${response.status}`
      )
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error en la solicitud de paciente por ID:", error)
    throw error
  }
}

const fetchAllPacientes = async () => {
  try {
    const response = await fetch(API_URL + "/pacientes", {
      headers: {
        Authorization: getToken(),
      },
    })

    if (!response.ok) {
      throw new Error(
        `Error al obtener pacientes. Estado HTTP: ${response.status}`
      )
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error en la solicitud de todos los pacientes:", error)
    throw error
  }
}

const createPaciente = async (data) => {
  const {
    nombres,
    run,
    primer_apellido,
    segundo_apellido,
    correo,
    numero,
    fecha_nacimiento,
    jornada,
    plan_estudios,
    semestre,
    ucm,
    seguro_MOK,
    prevision_id,
  } = data

  try {
    // Crear persona
    const createPersona = await fetch(API_URL + "/personas", {
      method: "POST",
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombres,
        primer_apellido,
        segundo_apellido,
        correo,
        run,
      }),
    })

    if (!createPersona.ok) {
      throw new Error(
        `Error al crear persona. Estado HTTP: ${createPersona.status}`
      )
    }

    const personaData = await createPersona.json()
    const persona_id = personaData.data.id

    try {
      const addNumber = await fetch(API_URL + "/fonos", {
        method: "POST",
        headers: {
          Authorization: getToken(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          persona_id,
          numero,
        }),
      })

      if (!addNumber.ok) {
        throw new Error(
          `Error al añadir número. Estado HTTP: ${addNumber.status}`
        )
      }

      try {
        const createPaciente = await fetch(API_URL + "/pacientes", {
          method: "POST",
          headers: {
            Authorization: getToken(),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            persona_id,
            fecha_nacimiento,
            jornada,
            plan_estudios,
            semestre,
            ucm,
            seguro_MOK,
            prevision_id,
          }),
        })

        if (!createPaciente.ok) {
          throw new Error(
            `Error al crear paciente. Estado HTTP: ${createPaciente.status}`
          )
        }

        const pacienteData = await createPaciente.json()
        return pacienteData
      } catch (error) {
        console.error("Error al crear paciente:", error)
        throw error
      }
    } catch (error) {
      console.error("Error al añadir número telefónico:", error)
      throw error
    }
  } catch (error) {
    console.error("Error al crear paciente:", error)
    throw error
  }
}

export { fetchPacienteByRut, fetchAllPacientes, createPaciente, getToken, fetchPacienteById }
