/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import FichaPreview from "./FichaPreview"
import Paciente from "./Paciente"
import { fetchPacientesWithFichasById } from "../services/pacienteService"
import useFichas from "../hooks/useFichas"
import usePacientes from "../hooks/usePacientes"

const ViewPaciente = ({ data }) => {
  const [fichas, setFichas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPacientesWithFichasById(data.id)
      setFichas(response.data.ficha)
    }

    fetchData()
  }, [])

  useFichas(setError, setLoading)
  usePacientes(setError, setLoading)

  return (
    <div>
      <Paciente data={data}></Paciente>
      <div className='row mx-auto p-5 pt-0 mt-0'>
        <div className='row mx-auto col-12 bg-secondary-subtle rounded-bottom border-top border-dark p-5'>
          <h1 className='display-1 fs-1 text-center'>Fichas Paciente</h1>
          {fichas.map((ficha) => (
            <FichaPreview key={ficha.id} data={ficha} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ViewPaciente
