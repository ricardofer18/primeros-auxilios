/* eslint-disable no-unused-vars */
import Navbar from "./Navbar"
import Fichas from "./Fichas"
import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Pacientes from "./Pacientes"
import AddFicha from "./AddFicha"
import useIsLoggedUser from "../hooks/useIsLoggedUser"
import ViewPaciente from "./ViewPaciente"
import ViewFicha from "./ViewFicha"
import usePacienteStore from "../store/pacienteStore"
import usePacientes from "../hooks/usePacientes"
import useFichaStore from "../store/fichaStore"
import useFichas from "../hooks/useFichas"

const Home = () => {
  const pacientes = usePacienteStore((state) => state.pacientes)
  const fichas = useFichaStore((state) => state.fichas)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useIsLoggedUser()

  usePacientes(setError, setLoading)
  useFichas(setError, setLoading)

  return (
    <div className='row bg-white mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/fichas' element={<Fichas />} />
        <Route path='/pacientes/*' element={<Pacientes />} />
        <Route path='/agregar-ficha/*' element={<AddFicha />} />
        {pacientes.map((paciente) => (
          <Route
            key={paciente.id}
            path={`/paciente/${paciente.id}`}
            element={<ViewPaciente data={paciente} />}
          />
        ))}
        {fichas.map((ficha) => (
          <Route
            key={ficha.id}
            path={`/ficha/${ficha.id}`}
            element={<ViewFicha data={ficha} />}
          />
        ))}
      </Routes>
    </div>
  )
}

export default Home
