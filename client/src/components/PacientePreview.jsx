/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const PacientePreview = ({ data }) => {
  const calcularEdad = () => {
    const fechaNacimiento = new Date(data.fecha_nacimiento)
    const ahora = new Date()
    const diferencia = ahora - fechaNacimiento
    const edadEnAnios = Math.floor(diferencia / (365.25 * 24 * 60 * 60 * 1000))
    return edadEnAnios
  }

  return (
    <button className='row mx-auto bg-white rounded shadow p-4 border-0 mb-4 mt-4'>
      <div className='col-4 p-4 border-end'>
        <img
          src='https://img.icons8.com/?size=1080&id=85147&format=png'
          alt='icono paciente'
          className='col-8'
        />
      </div>
      <div className='col-8 row mx-auto'>
        <p className='col-6 text-start fs-5 display-1 mb-4'>Nro. Fichas: 2</p>
        <p className='col-6 text-end fs-5 display-1'>Fecha: dd/mm/aaaa</p>
        <h1 className='text-start fs-4 display-1 large-text'>
          Nombre: {data.persona.correo}
        </h1>
        <h1 className='text-start fs-4 display-1 large-text'>
          Rut: {data.persona.run}
        </h1>
        <h1 className='text-start fs-4 display-1 large-text'>
          Edad: {calcularEdad()} años
        </h1>
      </div>
    </button>
  )
}

export default PacientePreview
