/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useNavigate } from "react-router-dom"
import { calcularEdad } from "../utils/edad"

const PacientePreview = ({ data }) => {
  const navigate = useNavigate()
  const edad = calcularEdad(data)
  console.log(data)

  return (
    <button
      className='row mx-auto bg-white rounded shadow p-4 border-0 mb-4 mt-4'
      onClick={() => navigate(`/home/paciente/${data.id}`)}
    >
      <div className='col-4 p-4 border-end'>
        <img
          src='https://img.icons8.com/?size=1080&id=85147&format=png'
          alt='icono paciente'
          className='col-8'
        />
      </div>
      <div className='col-8 row mx-auto'>
        <h1 className='text-start fs-4 display-1 large-text'>
          Nombre:{" "}
          {`${data.persona.nombres} ${data.persona.primer_apellido} ${data.persona.segundo_apellido}`}
        </h1>
        <h1 className='text-start fs-4 display-1 large-text'>
          Rut: {data.persona.run}
        </h1>
        <h1 className='text-start fs-4 display-1 large-text'>
          Edad: {edad} años
        </h1>
      </div>
    </button>
  )
}

export default PacientePreview
