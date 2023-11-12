const Ficha = () => {
    return (
        <div className='row mx-auto p-5 pt-0 mt-0'>
            <div className="row mx-auto col-12 bg-secondary-subtle rounded-bottom">
                <h1 className="display-1 fs-1 text-center mb-4">Datos Ficha</h1>
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

export default Ficha