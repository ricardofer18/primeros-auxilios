import { useState } from "react"
import BuscadorPaciente from "./Forms/BuscadorPaciente"
import FichaForm from "./Forms/FichaForm"
import { fetchPacienteById } from "../services/pacienteService"
import PacientePreview from "./PacientePreview"

const AddFicha = () => {
  const [paciente, setPaciente] = useState(null)
  const [success, setSuccess] = useState("none")

  const handleSuccessSearch = (data) => {
    setTimeout(() => {
      setPaciente(data)
      setSuccess('search')
    }, 1000)
  }

  const handleSuccessCreate = (data) => {
    setTimeout(async () => {
      const pacienteData = await fetchPacienteById(data.id)
      setPaciente(pacienteData.data)
      setSuccess('create')
    }, 1000)
  }

  const handleSuccessFicha = (success) => {
    setTimeout(async () => {
      if (success === true) {
        alert('FICHA CREADA EXITOSAMENTE!!!!!')
      }else {
        alert('puuta la wea')
      }
    }, 1000)
  }

  switch(success) {
    case 'none': return (
      <div className='col-10 mx-auto row text-center p-4 text-center'>
        <BuscadorPaciente
          onSuccess={handleSuccessSearch}
          onCreate={handleSuccessCreate}
        />
    </div>
    )
    case 'search': return (
      <div className='col-10 mx-auto row text-center p-4 text-center'>
        <PacientePreview data={paciente}></PacientePreview>
        <FichaForm pacienteData={paciente} onSuccessFicha={handleSuccessFicha}></FichaForm>
      </div>
    )
    case 'create': return (
      <div className='col-10 mx-auto row text-center p-4 text-center'>
        <PacientePreview data={paciente}></PacientePreview>
        <FichaForm pacienteData={paciente} onSuccessFicha={handleSuccessFicha}></FichaForm>
      </div>
    )
  }

}

export default AddFicha
