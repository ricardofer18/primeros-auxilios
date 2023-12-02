import { useState } from "react"
import FiltroPacientes from "../forms/FiltroPacientes"
import PacientePreview from "./PacientePreview"
import usePacienteStore from "../store/pacienteStore"
import { useLocation } from "react-router-dom"
import usePacientes from "../hooks/usePacientes"

const Pacientes = () => {
  const pacientes = usePacienteStore((state) => state.pacientes)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const location = useLocation()

  usePacientes(setError, setLoading)

  return (
    <>
      {location.pathname === "/home/pacientes" && (
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
      )}
    </>
  )
}

export default Pacientes
