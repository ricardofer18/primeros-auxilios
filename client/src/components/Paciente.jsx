/* eslint-disable react/prop-types */
import { calcularEdad } from "../utils/edad"

const Paciente = ({ data }) => {
  const edad = calcularEdad(data)

  return (
    <div className='row mx-auto p-5 pt-4 pb-0'>
      <div className='row mx-auto col-12 bg-secondary-subtle rounded-top border-0 p-5'>
        <div className='col-3 p-4 border-end border-dark h-full vertical-align'>
          <img
            src='https://img.icons8.com/?size=1080&id=85147&format=png'
            alt='icono paciente'
            className='col-8 mx-auto'
          />
        </div>
        <div className='col-9 row mx-auto'>
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
              Fecha Nacimiento: {data.fecha_nacimiento}
            </p>
            <p className='text-start fs-4 display-1 large-text bg-white rounded p-3'>
              Prevision: {data.prevision.nombre}
            </p>
          </section>
          <section className='col-6'>
            <p className='text-end fs-5 display-1'>Id Paciente: {data.id}</p>
            <p className='text-start fs-4 display-1 large-text bg-white rounded p-3'>
              Jornada: {data.jornada}
            </p>
            <p className='text-start fs-4 display-1 large-text bg-white rounded p-3'>
              Plan Estudios: {data.plan_estudios}
            </p>
            <p className='text-start fs-4 display-1 large-text bg-white rounded p-3'>
              Semestre: {data.semestre}
            </p>
            <p className='text-start fs-4 display-1 bg-white rounded p-3'>
              Seguro MOK:{" "}
              <img src='https://img.icons8.com/?size=20&id=83205&format=png' />
            </p>
            <p className='text-start fs-4 display-1 bg-white rounded p-3'>
              UCM:{" "}
              <img src='https://img.icons8.com/?size=20&id=83143&format=png' />
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Paciente
