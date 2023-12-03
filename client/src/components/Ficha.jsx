/* eslint-disable react/prop-types */
const Ficha = ({ data }) => {

  return (
    <div className='row mx-auto p-5 pt-0 mt-0'>
      <div className='row mx-auto col-12 bg-secondary-subtle rounded-bottom'>
        <h1 className='display-1 fs-1 text-center mb-4'>Datos Ficha</h1>
        <p className='text-start fs-4 display-1 large-text col-12 bg-white rounded p-3'>
          Motivo Consulta: {data.motivo_consulta}
        </p>
        <section className='col-6 p-0 pe-3'>
          <p className='text-start fs-4 display-1 large-text col-12 bg-white rounded p-3'>
            Presion Ansiolitica: {data.presion_ansiolitica}
          </p>
          <p className='text-start fs-4 display-1 large-text col-12 bg-white rounded p-3'>
            Presion Diastolica: {data.presion_diastolica}
          </p>
          <p className='text-start fs-4 display-1 large-text col-12 bg-white rounded p-3'>
            Frecuencia Cardiaca: {data.frecuencia_cardiaca}
          </p>
          <p className='text-start fs-4 display-1 large-text col-12 bg-white rounded p-3'>
            Frecuencia Respiratoria: {data.frecuencia_respiratoria}
          </p>
        </section>
        <section className='col-6 p-0 ps-3'>
          <p className='text-start fs-4 display-1 large-text col-12 bg-white rounded p-3'>
            Temperatura: {data.temperatura}
          </p>
          <p className='text-start fs-4 display-1 large-text col-12 bg-white rounded p-3'>
            Saturacion: {data.saturacion}
          </p>
          <p className='text-start fs-4 display-1 large-text col-12 bg-white rounded p-3'>
            HGT: {data.hgt}
          </p>
          <p className='text-start fs-4 display-1 large-text col-12 bg-white rounded p-3'>
            EVA: {data.eva}
          </p>
        </section>
        <p className='text-start fs-4 display-1 large-text col-12 bg-white rounded p-3'>
          Procedimiento: {data.procedimiento}
        </p>
      </div>
    </div>
  )
}

export default Ficha
