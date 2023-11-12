import Navbar from "./Navbar"
import Fichas from "./Fichas"
import { Route, Routes } from "react-router-dom"
import Pacientes from "./Pacientes"
import AddFicha from "./AddFicha"
import useIsLoggedUser from "../hooks/useIsLoggedUser"
import ViewPaciente from "./ViewPaciente"
import ViewFicha from "./ViewFicha"

const Home = () => {
  useIsLoggedUser()

  return (
    <div className='row bg-white mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/fichas' element={<Fichas />} />
        <Route path='/pacientes' element={<Pacientes />} />
        <Route path='/agregar-ficha' element={<AddFicha />} />
        <Route path='/pacientes/view' element={<ViewPaciente />} />
        <Route path='/fichas/view' element={<ViewFicha />} />
      </Routes>
    </div>
  )
}

export default Home
