/* eslint-disable react/prop-types */
import { useFormik } from "formik"
import { createFicha } from "../../services/fichaService"

const FichaForm = ({ pacienteData, onSuccessFicha }) => {
  const formik = useFormik({
    initialValues: {
      paciente_id: pacienteData.id,
      personal_id: localStorage.idPersonal,
      fecha: new Date().toISOString().split("T")[0],
      motivo_consulta: "",
      presion_sistolica: "",
      presion_diastolica: "",
      frecuencia_cardiaca: "",
      frecuencia_respiratoria: "",
      temperatura: "",
      saturacion: "",
      hgt: "",
      eva: "",
      procedimiento: "",
    },
    onSubmit: async (values) => {
      const ficha = await createFicha(values)
      console.log(ficha.success)
      onSuccessFicha(ficha.success)
    },
  })

  return (
    <form
      className='bg-secondary-subtle rounded col-12 row p-5'
      onSubmit={formik.handleSubmit}
    >
      <h1 className='display-1 fs-1 mb-5'>Ingresar Datos Ficha</h1>
      <div className='col-6'>
        <input
          type='textarea'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Motivo de Consulta'
          id='motivo_consulta'
          name='motivo_consulta'
          onChange={formik.handleChange}
          value={formik.values.motivo_consulta}
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Presión Sistólica'
          id='presion_sistolica'
          name='presion_sistolica'
          onChange={formik.handleChange}
          value={formik.values.presion_sistolica}
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Presión Diastólica'
          id='presion_diastolica'
          name='presion_diastolica'
          onChange={formik.handleChange}
          value={formik.values.presion_diastolica}
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Frecuencia Cardíaca'
          id='frecuencia_cardiaca'
          name='frecuencia_cardiaca'
          onChange={formik.handleChange}
          value={formik.values.frecuencia_cardiaca}
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Frecuencia Respiratoria'
          id='frecuencia_respiratoria'
          name='frecuencia_respiratoria'
          onChange={formik.handleChange}
          value={formik.values.frecuencia_respiratoria}
        />
      </div>
      <div className='col-6'>
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Temperatura'
          id='temperatura'
          name='temperatura'
          onChange={formik.handleChange}
          value={formik.values.temperatura}
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Saturación'
          id='saturacion'
          name='saturacion'
          onChange={formik.handleChange}
          value={formik.values.saturacion}
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='HGT'
          id='hgt'
          name='hgt'
          onChange={formik.handleChange}
          value={formik.values.hgt}
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='EVA (Escala Visual Analógica)'
          id='eva'
          name='eva'
          onChange={formik.handleChange}
          value={formik.values.eva}
        />
        <input
          type='text'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Procedimiento'
          id='procedimiento'
          name='procedimiento'
          onChange={formik.handleChange}
          value={formik.values.procedimiento}
        />
      </div>
      <button type='submit' className='btn btn-danger bg-red mt-5 col-3 mx-auto'>
        Agregar Ficha Paciente
      </button>
    </form>
  )
}

export default FichaForm
