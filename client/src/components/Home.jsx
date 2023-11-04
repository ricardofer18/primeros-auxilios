import Navbar from "./Navbar"
import Fichas from "./Fichas"
import { Route, Routes } from "react-router-dom"
import Pacientes from "./Pacientes"
import useIsLoggedUser from "../hooks/useIsLoggedUser"

const Home = () => {
  useIsLoggedUser()

  return (
    <div className='row bg-white mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/fichas' element={<Fichas />} />
        <Route path='/pacientes' element={<Pacientes />} />
      </Routes>
    </div>
  )
}

export default Home
