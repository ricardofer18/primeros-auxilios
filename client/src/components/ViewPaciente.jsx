import FichaPreview from "./FichaPreview"

const ViewPaciente = () => {
    const calcularEdad = () => {
        const fechaNacimiento = new Date(data.fecha_nacimiento)

        const ahora = new Date()
        const diferencia = ahora - fechaNacimiento
        const edadEnAnios = Math.floor(diferencia / (365.25 * 24 * 60 * 60 * 1000))
        return edadEnAnios
    }

    return (
        <div className='row mx-auto p-5 pt-4'>
            <div className="row mx-auto col-12 bg-secondary-subtle rounded border-0 p-5">
                <div className='col-3 p-4 border-end border-dark h-full vertical-align'>
                    <img
                        src='https://img.icons8.com/?size=1080&id=85147&format=png'
                        alt='icono paciente'
                        className='col-8 mx-auto'
                    />
                </div>
                <div className='col-9 row mx-auto'>
                    <section className="col-6">
                        <p className='text-start fs-5 display-1'>Nro. Fichas: 1</p>
                        <p className='text-start fs-3 display-1 large-text bg-white rounded p-3'>
                            Nombre:
                        </p>
                        <p className='text-start fs-3 display-1 large-text bg-white rounded p-3'>
                            Rut:
                        </p>
                        <p className='text-start fs-3 display-1 large-text bg-white rounded p-3'>
                            Edad:
                        </p>
                        <p className='text-start fs-3 display-1 large-text bg-white rounded p-3'>
                            Fecha Nacimiento: dd/mm/aaaa
                        </p>
                        <p className='text-start fs-3 display-1 large-text bg-white rounded p-3'>
                            Prevision:
                        </p>
                    </section>
                    <section className="col-6">
                        <p className='text-end fs-5 display-1'>Id Paciente: 123123123123</p>
                        <p className='text-start fs-3 display-1 large-text bg-white rounded p-3'>
                            Jornada:
                        </p>
                        <p className='text-start fs-3 display-1 large-text bg-white rounded p-3'>
                            Plan Estudios:
                        </p>
                        <p className='text-start fs-3 display-1 large-text bg-white rounded p-3'>
                            Semestre:
                        </p>
                        <p className='text-start fs-3 display-1 bg-white rounded p-3'>
                            Seguro MOK: <img src="https://img.icons8.com/?size=24&id=83205&format=png" />
                        </p>
                        <p className='text-start fs-3 display-1 bg-white rounded p-3'>
                            UCM: <img src="https://img.icons8.com/?size=24&id=83143&format=png" />
                        </p>
                    </section>
                </div>
            </div>
            <div className="row mx-auto col-12 bg-secondary-subtle rounded border-0 p-5 mt-4">
                <h1 className="display-1 fs-1 text-center">Fichas Paciente</h1>
                <FichaPreview></FichaPreview>
            </div>
        </div>
    )
}

export default ViewPaciente