import { useState } from "react"
import BuscadorPaciente from "../forms/BuscadorPaciente"
import FichaForm from "../forms/FichaForm"
import { fetchPacienteById } from "../services/pacienteService"
import PacientePreview from "./PacientePreview"
import useFichas from "../hooks/useFichas"
import usePacientes from "../hooks/usePacientes"
import { useNavigate } from "react-router-dom"

const AddFicha = () => {
  const [paciente, setPaciente] = useState(null)
  const [success, setSuccess] = useState("none")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSuccessSearch = (data) => {
    handleSuccess(data, "search")
  }

  const handleSuccessCreate = async (data) => {
    const pacienteData = await fetchPacienteById(data.id)
    handleSuccess(pacienteData.data, "create")
  }

  const handleSuccess = (data, successType) => {
    setTimeout(() => {
      setPaciente(data)
      setSuccess(successType)
    }, 1000)
  }

  const handleSuccessFicha = (success, id) => {
    setTimeout(() => {
      if (success === true) {
        alert("FICHA CREADA EXITOSAMENTE!!!!!")
        navigate(`/home/fichas`)
      } else if (success === false) {
        alert("ERROR INESPERADO")
      }
    }, 1000)
  }

  useFichas(setError, setLoading)
  usePacientes(setError, setLoading)

  return (
    <div className='col-10 mx-auto row text-center p-4 text-center'>
      {success === "none" && (
        <BuscadorPaciente
          onSuccess={handleSuccessSearch}
          onCreate={handleSuccessCreate}
        />
      )}
      {(success === "search" || success === "create") && (
        <>
          <PacientePreview data={paciente} />
          <FichaForm
            pacienteData={paciente}
            onSuccessFicha={handleSuccessFicha}
          />
        </>
      )}
    </div>
  )
}

export default AddFicha
