const FichaForm = () => {
  return (
    <form className='bg-secondary-subtle rounded col-12 row p-5'>
      <h1 className='display-1 fs-1 mb-5'>Ingresar Datos Ficha</h1>
      <div className='col-6'>
        <div className='mb-4'>
          <div className='input-group'>
            <span className='input-group-text p-2'>Fecha Consulta:</span>
            <input
              type='date'
              className='form-control'
              placeholder='Fecha de Nacimiento'
            />
          </div>
        </div>
        <input
          type='textarea'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Motivo de Consulta'
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Presión Sistólica'
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Presión Diastólica'
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Frecuencia Cardíaca'
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Frecuencia Respiratoria'
        />
      </div>
      <div className='col-6'>
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Temperatura'
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Saturación'
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='HGT'
        />
        <input
          type='number'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='EVA (Escala Visual Analógica)'
        />
        <input
          type='text'
          className='col-12 rounded-3 border-0 bg-white p-2 mb-4'
          placeholder='Procedimiento'
        />
      </div>
      <button type='submit' className='btn btn-dark mt-5 col-3 mx-auto'>
        Agregar Ficha Paciente
      </button>
    </form>
  )
}

export default FichaForm
