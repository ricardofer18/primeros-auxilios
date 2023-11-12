import { useState } from "react"
import BuscadorPaciente from "./Forms/BuscadorPaciente"
import FichaForm from "./Forms/FichaForm"

const AddFicha = () => {
  const [paciente, setPaciente] = useState(null)

  const handleSuccess = (data) => {
    setTimeout(() => {
      setPaciente(data)
    }, 1500)
  }

  return (
    <div className='col-10 mx-auto row text-center p-4 text-center'>
      <BuscadorPaciente onSuccess={handleSuccess}></BuscadorPaciente>
      <FichaForm pacienteData={paciente}></FichaForm>
    </div>
  )
}

export default AddFicha
