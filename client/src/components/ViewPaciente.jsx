/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import FichaPreview from "./FichaPreview"
import Paciente from "./Paciente"
import { fetchPacientesWithFichasById } from "../services/pacienteService"
import useFichas from "../hooks/useFichas"
import usePacientes from "../hooks/usePacientes"
import DocumentoPreview from "./DocumentoPreview"

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
    <div className="row col-10 mx-auto h-full">
      <section className="col-7 p-4 h-full">
        <Paciente data={data}></Paciente>
        <div id="documentos" className='row mx-auto bg-secondary-subtle rounded p-5 mt-5 h-full'>
          <h1 className="display-1 fs-1 text-center col-12">Documentos</h1>
          <div className="row-cols-5 text-center h-full">
            <DocumentoPreview />
            <DocumentoPreview />
            <DocumentoPreview />
            <DocumentoPreview />
          </div>
          <button className="col-6 btn btn-danger bg-red fs-4 p-2 mt-4 mx-auto">
            Adjuntar nuevo documento
          </button>
        </div>
      </section>
      <section className="col-5 p-4">
        <div className='row mx-auto bg-secondary-subtle rounded p-5 overflow-auto' style={{height: '80%'}}>
          <h1 className='display-1 fs-1 text-center'>Fichas Paciente</h1>
          {fichas.map((ficha) => (
            <FichaPreview key={ficha.id} data={ficha} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ViewPaciente
