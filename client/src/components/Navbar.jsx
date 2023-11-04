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
      <div className='fs-5'>
        <img src={logo} className='col-1 float-start ms-5' />
        <button
          className='float-end bg-red text-white border-0 rounded-top ps-4 ms-2'
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
              ? "float-end col-2 bg-red text-white border-0 rounded-top p-2 ms-2 selected"
              : "float-end col-2 bg-red text-white border-0 rounded-top p-2 ms-2"
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
              ? "float-end col-2 bg-red text-white border-0 rounded-top p-2 ms-2 selected"
              : "float-end col-2 bg-red text-white border-0 rounded-top p-2 ms-2"
          }
          onClick={() => navigate("fichas")}
        >
          <img
            src='https://img.icons8.com/?size=26&id=98063&format=png'
            className='pe-2 invert-1'
          />
          Fichas
        </button>
      </div>
    </nav>
  )
}

export default Navbar
