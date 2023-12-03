/* eslint-disable react/prop-types */
import { calcularEdad } from "../utils/edad"

const Paciente = ({ data }) => {
  const edad = calcularEdad(data)
  const fecha = new Date(data.fecha_nacimiento)

  return (
    <div className='row mx-auto'>
      <div className='row mx-auto col-12 bg-secondary-subtle rounded border-0 p-5'>
        <div className='col-12 row mx-auto'>
          <h1 className='display-1 fs-1 text-center'>Datos Paciente</h1>
          <section className='col-6'>
            <p className='text-start fs-5 display-1'>Nro. Fichas: 1</p>
            <p className='text-start fs-4 display-1 large-text bg-white rounded p-3'>
              Nombre:{" "}
              {`${data.persona.nombres} ${data.persona.primer_apellido} ${data.persona.segundo_apellido}`}
            </p>
            <p className='text-start fs-4 display-1 large-text bg-white rounded p-3'>
              Rut: {data.persona.run}
            </p>
            <p className='text-start fs-4 display-1 large-text bg-white rounded p-3'>
              Edad: {edad}
            </p>
            <p className='text-start fs-4 display-1 large-text bg-white rounded p-3'>
              Fecha Nacimiento: {fecha.toLocaleDateString()}
            </p>
            <p className='text-start fs-4 display-1 large-text bg-white rounded p-3'>
              Prevision: {data.prevision.nombre}
            </p>
          </section>
          <section className='col-6'>
            <p className='text-end fs-5 display-1'> a </p>
            <p className='text-start fs-4 display-1 large-text bg-white rounded p-3'>
              Jornada: {data.jornada.nombre}
            </p>
            <p className='text-start fs-4 display-1 large-text bg-white rounded p-3 large-text'>
              Plan Estudios: {data.plan_estudios.nombre}
            </p>
            <p className='text-start fs-4 display-1 large-text bg-white rounded p-3'>
              Semestre: {data.semestre}
            </p>
            <p className='text-start fs-4 display-1 bg-white rounded p-3'>
              Seguro MOK:{" "}
              {data.seguro_MOK === true ? (
                <img src='https://img.icons8.com/?size=20&id=83205&format=png' />
              ) : (
                <img src='https://img.icons8.com/?size=20&id=83143&format=png' />
              )}
            </p>
            <p className='text-start fs-4 display-1 bg-white rounded p-3'>
              UCM:{" "}
              {data.ucm === true ? (
                <img src='https://img.icons8.com/?size=20&id=83205&format=png' />
              ) : (
                <img src='https://img.icons8.com/?size=20&id=83143&format=png' />
              )}
            </p>
          </section>
          <section className='col-12 text-center'></section>
        </div>
      </div>
    </div>
  )
}

export default Paciente
