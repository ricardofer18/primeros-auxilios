import { useState } from "react"
import BuscadorPaciente from "./Forms/BuscadorPaciente"
import FichaForm from "./Forms/FichaForm"
import { fetchPacienteById } from "../services/pacienteService"
import PacientePreview from "./PacientePreview"
import useFichas from "../hooks/useFichas"
import usePacientes from "../hooks/usePacientes"

const AddFicha = () => {
  const [paciente, setPaciente] = useState(null)
  const [success, setSuccess] = useState("none")

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

  const handleSuccessFicha = (success) => {
    setTimeout(() => {
      if (success === true) {
        alert("FICHA CREADA EXITOSAMENTE!!!!!")
      } else {
        alert("puuta la wea")
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
