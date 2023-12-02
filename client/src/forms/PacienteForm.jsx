/* eslint-disable no-unused-vars */
import { useFormik } from "formik"
import {
  createPaciente,
  fetchAllJornadas,
  fetchAllPlanes,
} from "../services/pacienteService"
import { useEffect, useState } from "react"
import { fetchPrevisiones } from "../services/previsionService"

// eslint-disable-next-line react/prop-types
const PacienteForm = ({ onCreate }) => {
  const [previsiones, setPrevisiones] = useState([])
  const [planes, setPlanes] = useState([])
  const [jornadas, setJornada] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const dataPrevisiones = await fetchPrevisiones()
      const dataPlanes = await fetchAllPlanes()
      const dataJornada = await fetchAllJornadas()
      setPrevisiones(dataPrevisiones.data)
      setJornada(dataJornada.data)
      setPlanes(dataPlanes.data)
    }

    fetchData()
  }, [])

  const formik = useFormik({
    initialValues: {
      nombres: "",
      run: "",
      primer_apellido: "",
      segundo_apellido: "",
      correo: "",
      numero: "",
      fecha_nacimiento: "",
      jornada_id: "",
      plan_estudios_id: "",
      semestre: "",
      ucm: false,
      seguro_MOK: false,
      prevision_id: "",
    },
    onSubmit: async (values) => {
      const paciente = await createPaciente(values)
      onCreate(paciente.data)
      console.log(values)
    },
  })

  return (
    <form
      className='bg-secondary-subtle rounded col-12 row p-5'
      onSubmit={formik.handleSubmit}
    >
      <h1 className='display-1 fs-1 mb-5'>Ingresar Datos Paciente</h1>
      <div className='col-6'>
        <input
          type='text'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Nombres'
          id='nombres'
          name='nombres'
          onChange={formik.handleChange}
          value={formik.values.nombres}
        />
        <input
          type='text'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Rut'
          id='run'
          name='run'
          onChange={formik.handleChange}
          value={formik.values.run}
        />
        <input
          type='text'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Primer Apellido'
          id='primer_apellido'
          name='primer_apellido'
          onChange={formik.handleChange}
          value={formik.values.primer_apellido}
        />
        <input
          type='text'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Segundo Apellido'
          id='segundo_apellido'
          name='segundo_apellido'
          onChange={formik.handleChange}
          value={formik.values.segundo_apellido}
        />
        <input
          type='email'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Correo'
          id='correo'
          name='correo'
          onChange={formik.handleChange}
          value={formik.values.correo}
        />
        <input
          type='text'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Fono'
          id='numero'
          name='numero'
          onChange={formik.handleChange}
          value={formik.values.numero}
        />
      </div>
      <div className='col-6'>
        <div className='mb-4'>
          <div className='input-group'>
            <span className='input-group-text p-2' htmlFor='fechaNacimiento'>
              Fecha de Nacimiento:
            </span>
            <input
              type='date'
              className='form-control'
              placeholder='Fecha de Nacimiento'
              id='fecha_nacimiento'
              name='fecha_nacimiento'
              onChange={formik.handleChange}
              value={formik.values.fecha_nacimiento}
            />
          </div>
        </div>
        <select
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          id='jornada_id'
          name='jornada_id'
          onChange={formik.handleChange}
          value={formik.values.jornada_id}
        >
          <option value='' disabled>
            Jornada
          </option>
          {jornadas.map((jornada) => (
            <option key={jornada.id} value={jornada.id}>
              {jornada.nombre}
            </option>
          ))}
        </select>
        <select
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          id='plan_estudios_id'
          name='plan_estudios_id'
          onChange={formik.handleChange}
          value={formik.values.plan_estudios_id}
        >
          <option value='' disabled>
            Plan de Estudios
          </option>
          {planes.map((plan) => (
            <option key={plan.id} value={plan.id}>
              {plan.nombre}
            </option>
          ))}
        </select>
        <input
          type='text'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Semestre'
          id='semestre'
          name='semestre'
          onChange={formik.handleChange}
          value={formik.values.semestre}
        />
        <div className='col-12 display-1 fs-5 btn-group mb-4'>
          <input
            type='checkbox'
            className='btn-check'
            id='ucm'
            name='ucm'
            onChange={formik.handleChange}
            checked={formik.values.ucm}
          />
          <label className='btn btn-outline-danger' htmlFor='ucm'>
            UCM
          </label>
          <input
            type='checkbox'
            className='btn-check'
            id='seguro_MOK'
            name='seguro_MOK'
            onChange={formik.handleChange}
            checked={formik.values.seguro_MOK}
          />
          <label className='btn btn-outline-success' htmlFor='seguro_MOK'>
            Seguro MOK
          </label>
        </div>
        <select
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          id='prevision_id'
          name='prevision_id'
          onChange={formik.handleChange}
          value={formik.values.prevision_id}
        >
          <option value='' disabled>
            Previsión
          </option>
          {previsiones.map((prevision) => (
            <option key={prevision.id} value={prevision.id}>
              {prevision.nombre}
            </option>
          ))}
        </select>
      </div>
      <button
        type='submit'
        className='btn btn-danger bg-red mt-5 col-3 mx-auto'
      >
        Enviar
      </button>
    </form>
  )
}

export default PacienteForm
