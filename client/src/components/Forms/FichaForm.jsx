const FichaForm = () => {
    return (
        <form className="bg-secondary-subtle rounded col-12 row p-5">
            <h1 className="display-1 fs-1 mb-5">Ingresar Datos Paciente</h1>
            <div className="col-6">
                <input type="text" className="col-12 rounded-3 border-0 bg-white p-2 mb-4" placeholder="Nombres:" />
                <input type="text" className="col-12 rounded-3 border-0 bg-white p-2 mb-4" placeholder="Rut:" />
                <input type="text" className="col-12 rounded-3 border-0 bg-white p-2 mb-4" placeholder="Primer Apellido" />
                <input type="text" className="col-12 rounded-3 border-0 bg-white p-2 mb-4" placeholder="Segundo Apellido" />
                <input type="email" className="col-12 rounded-3 border-0 bg-white p-2 mb-4" placeholder="Correo" />
                <input type="text" className="col-12 rounded-3 border-0 bg-white p-2 mb-4" placeholder="Fono" />
            </div>
            <div className="col-6">
                <div className="mb-4">
                    <div class="input-group">
                        <span class="input-group-text p-2">Fecha de Nacimiento:</span>
                        <input type="date" className="form-control" placeholder="Fecha de Nacimiento" />
                    </div>
                </div>
                <input type="text" className="col-12 rounded-3 border-0 bg-white p-2 mb-4" placeholder="Jornada" />
                <input type="text" className="col-12 rounded-3 border-0 bg-white p-2 mb-4" placeholder="Plan de Estudios" />
                <input type="text" className="col-12 rounded-3 border-0 bg-white p-2 mb-4" placeholder="Semestre" />
                <div className="col-12 display-1 fs-5 btn-group mb-4">
                    <input type="checkbox" class="btn-check" id="ucm" autocomplete="off" />
                    <label class="btn btn-outline-danger" for="ucm">UCM</label>
                    <input type="checkbox" class="btn-check" id="mok" autocomplete="off" />
                    <label class="btn btn-outline-success" for="mok">Seguro MOK</label>
                </div>
                <select className="col-12 rounded-3 border-0 bg-white p-2 mb-4">
                    <option selected disabled>Previsión</option>
                    <option value={'fonasa'}>Fonasa</option>
                    <option value={'isapre'}>Isapre</option>
                </select>
            </div>
            <button type="submit" className="btn btn-dark mt-5 col-3 mx-auto">Agregar Ficha Paciente</button>
        </form>
    );
};

export default FichaForm;
