/* eslint-disable react/prop-types */
import { useState } from "react"
import { useFormik } from "formik"
import { fetchPacienteByRut } from "../services/pacienteService"
import BtnCrearPaciente from "../components/BtnCrearPaciente"
import PacientePreview from "../components/PacientePreview"
import PacienteForm from "./PacienteForm"

const BuscadorPaciente = ({ onSuccess, onCreate }) => {
  const [showCrearForm, setShowCrearForm] = useState(false)
  const [found, setFound] = useState(false)
  const [data, setData] = useState("")

  const formik = useFormik({
    initialValues: {
      rut: "",
    },
    onSubmit: async (values) => {
      if (values.rut.trim() === "") {
        alert("El Rut del paciente es requerido")
        return
      }

      try {
        const paciente = await fetchPacienteByRut(values.rut)
        if (paciente.success === false) {
          setFound(false)
        } else {
          setFound(true)
          setData(paciente.data)
          await onSuccess(paciente.data)
        }
      } catch (error) {
        console.error("Error al buscar paciente:", error)
        setFound(false)
      }
    },
  })

  const handleClickCrear = () => {
    setShowCrearForm(true)
  }

  return (
    <>
      {showCrearForm === false ? (
        <form
          className='bg-secondary-subtle rounded col-12 row p-5 mb-4'
          onSubmit={formik.handleSubmit}
        >
          <h1 className='display-1 fs-1 mb-5'>Buscar Paciente</h1>
          <div className='input-group mb-3'>
            <input
              type='text'
              className={`form-control`}
              placeholder='Rut Paciente:'
              name='rut'
              onChange={formik.handleChange}
              value={formik.values.rut}
            />
            <button className='btn btn-danger bg-red' type='submit'>
              Buscar Paciente
              <img
                src='https://img.icons8.com/?size=20&id=83218&format=png'
                className='invert-1 ps-2'
              />
            </button>
          </div>
          {found === false ? (
            <BtnCrearPaciente onClick={handleClickCrear}></BtnCrearPaciente>
          ) : (
            <PacientePreview data={data}></PacientePreview>
          )}
        </form>
      ) : (
        <PacienteForm onCreate={onCreate} />
      )}
    </>
  )
}

export default BuscadorPaciente
