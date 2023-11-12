import { useEffect, useState } from "react"
import FiltroPacientes from "./Forms/FiltroPacientes"
import PacientePreview from "./PacientePreview"
import { fetchAllPacientes } from "../services/pacienteService"

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllPacientes()
        setPacientes(data.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='col-10 mx-auto row text-center'>
      <div className='col-3 bg-secondary-subtle mt-4 mb-4 rounded p-5'>
        <h1 className='mb-5'>Filtros</h1>
        <FiltroPacientes></FiltroPacientes>
      </div>
      <div className='col-8 p-5 pt-4 pb-4 row mx-auto m-4 bg-secondary-subtle rounded'>
        {loading ? (
          <p>Cargando pacientes...</p>
        ) : error ? (
          <p>Error al cargar pacientes. Por favor, intenta nuevamente.</p>
        ) : pacientes.length > 0 ? (
          pacientes.map((paciente) => (
            <PacientePreview
              key={paciente.id}
              data={paciente}
            ></PacientePreview>
          ))
        ) : (
          <p>No se encontraron pacientes.</p>
        )}
      </div>
    </div>
  )
}

export default Pacientes
