import { useState } from "react"
import logo from "../assets/inacap.png"
import { useNavigate, useLocation } from "react-router-dom"
import ProfileOptions from "./ProfileOptions"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showProfileOptions, setShowProfileOptions] = useState(false)

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions)
  }

  return (
    <nav className='row mx-auto bg-red pt-3'>
      <div className='fs-5 row mx-auto'>
        <img src={logo} className='logo col-1' />
        <div className="col-11 text-end">

          <button
            className='float-end bg-red text-white border-0 rounded-top ms-2 col-1 text-end btn-icon'
            onClick={toggleProfileOptions}
          >
            <img
              src='https://img.icons8.com/?size=34&id=85147&format=png'
              className={`pe-2 invert-1 ${showProfileOptions ? "active" : ""}`}
            />
          </button>
          {showProfileOptions && <ProfileOptions />}

          <button
            className={
              location.pathname === "/home/pacientes"
                ? "col-2 bg-red text-white border-0 rounded-top p-2 ms-2 h-full selected"
                : "col-2 bg-red text-white border-0 rounded-top p-2 ms-2 h-full"
            }
            onClick={() => navigate("pacientes")}
          >
            <img
              src='https://img.icons8.com/?size=26&id=86980&format=png'
              className='pe-2 invert-1'
            />
            Pacientes
          </button>

          <button
            className={
              location.pathname === "/home/fichas"
                ? "col-2 bg-red text-white border-0 rounded-top p-2 ms-2 h-full selected"
                : "col-2 bg-red text-white border-0 rounded-top p-2 ms-2 h-full"
            }
            onClick={() => navigate("fichas")}
          >
            <img
              src='https://img.icons8.com/?size=26&id=98063&format=png'
              className='pe-2 invert-1'
            />
            Fichas
          </button>

          <button
            className={
              location.pathname === "/home/agregar-ficha"
                ? "col-2 bg-red text-white border-0 rounded-top p-2 ms-2 h-full selected"
                : "col-2 bg-red text-white border-0 rounded-top p-2 ms-2 h-full"
            }
            onClick={() => navigate("agregar-ficha")}
          >
            <img
              src='https://img.icons8.com/?size=26&id=89996&format=png'
              className='pe-2 invert-1'
            />
            Redactar Ficha
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
