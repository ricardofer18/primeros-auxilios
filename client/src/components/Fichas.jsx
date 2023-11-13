import FichaPreview from "./FichaPreview"
import FiltroFicha from "./Forms/FiltroFichas"
import { useLocation } from "react-router-dom"
import useFichas from "../hooks/useFichas"
import useFichaStore from "../store/fichaStore"
import { useState } from "react"
import { usePacientes } from "../hooks/usePacientes"

const Fichas = () => {
  const fichas = useFichaStore((state) => state.fichas)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const location = useLocation()

  useFichas(setError, setLoading)
  usePacientes(setError, setLoading)

  return (
    <>
      {location.pathname === "/home/fichas" && (
        <div className='col-10 mx-auto row text-center'>
          <div className='col-3 bg-secondary-subtle mt-4 mb-4 rounded p-5'>
            <h1 className='mb-5'>Filtros</h1>
            <FiltroFicha></FiltroFicha>
          </div>
          <div className='col-8 p-5 pt-4 pb-4 row mx-auto m-4 bg-secondary-subtle rounded'>
            {loading ? (
              <p>Cargando fichas...</p>
            ) : error ? (
              <p>Error al cargar fichas. Por favor, intenta nuevamente.</p>
            ) : fichas.length > 0 ? (
              fichas.map((ficha) => (
                <FichaPreview key={ficha.id} data={ficha}></FichaPreview>
              ))
            ) : (
              <p>No se encontraron fichas.</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Fichas
