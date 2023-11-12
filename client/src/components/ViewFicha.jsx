const ViewFicha = () => {
    return (
        <div className='row mx-auto p-5 pt-4'>
            <div className="row mx-auto col-12 bg-secondary-subtle rounded-top border-0 p-5">
                <div className='col-3 p-4 border-end border-dark h-full vertical-align'>
                    <img
                        src='https://img.icons8.com/?size=1080&id=85147&format=png'
                        alt='icono paciente'
                        className='col-8 mx-auto'
                    />
                </div>
                <div className='col-9 row mx-auto'>
                    <section className="col-6">
                        <p className='text-start fs-5 display-1 mb-4'>Nro. Fichas: 1</p>
                        <p className='text-start fs-3 display-1 large-text'>
                            Nombre:
                        </p>
                        <p className='text-start fs-3 display-1 large-text'>
                            Rut:
                        </p>
                        <p className='text-start fs-3 display-1 large-text'>
                            Edad:
                        </p>
                        <p className='text-start fs-3 display-1 large-text'>
                            Fecha Nacimiento: dd/mm/aaaa
                        </p>
                        <p className='text-start fs-3 display-1 large-text'>
                            Prevision:
                        </p>
                    </section>
                    <section className="col-6">
                        <p className='text-end fs-5 display-1 mb-4'>Fecha: dd/mm/aaaa</p>
                        <p className='text-start fs-3 display-1 large-text'>
                            Jornada:
                        </p>
                        <p className='text-start fs-3 display-1 large-text'>
                            Plan Estudios:
                        </p>
                        <p className='text-start fs-3 display-1 large-text'>
                            Semestre:
                        </p>
                        <p className='text-start fs-3 display-1'>
                            Seguro MOK: <img src="https://img.icons8.com/?size=24&id=83205&format=png" />
                        </p>
                        <p className='text-start fs-3 display-1'>
                            UCM: <img src="https://img.icons8.com/?size=24&id=83143&format=png" />
                        </p>
                    </section>
                </div>
            </div>
            <div className="row mx-auto col-12 bg-secondary-subtle rounded-bottom border-top border-dark p-5">
                <h1 className="display-1 fs-1 text-center">Datos Ficha</h1>
                <p className='text-start fs-3 display-1 large-text col-12 bg-white rounded p-3'>
                    Motivo Consulta:
                </p>
                <section className="col-6 p-0 pe-3">
                    <p className='text-start fs-3 display-1 large-text col-12 bg-white rounded p-3'>
                        Presion Ansiolitica:
                    </p>
                    <p className='text-start fs-3 display-1 large-text col-12 bg-white rounded p-3'>
                        Preison Diastolica:
                    </p>
                    <p className='text-start fs-3 display-1 large-text col-12 bg-white rounded p-3'>
                        Frecuencia Cardiaca:
                    </p>
                    <p className='text-start fs-3 display-1 large-text col-12 bg-white rounded p-3'>
                        Frecuencia Respiratoria:
                    </p>
                </section>
                <section className="col-6 p-0 ps-3">
                    <p className='text-start fs-3 display-1 large-text col-12 bg-white rounded p-3'>
                        Temperatura:
                    </p>
                    <p className='text-start fs-3 display-1 large-text col-12 bg-white rounded p-3'>
                        Saturacion:
                    </p>
                    <p className='text-start fs-3 display-1 large-text col-12 bg-white rounded p-3'>
                        HGT:
                    </p>
                    <p className='text-start fs-3 display-1 large-text col-12 bg-white rounded p-3'>
                        EVA:
                    </p>
                </section>
                <p className='text-start fs-3 display-1 large-text col-12 bg-white rounded p-3'>
                    Procedimiento:
                </p>
            </div>
        </div>
    )
}

export default ViewFicha