import BtnCrearPaciente from "../BtnCrearPaciente";
import PacientePreview from "../PacientePreview";

const BuscadorPaciente = () => {
    return (
        <form className="bg-secondary-subtle rounded col-12 row p-5 mb-4">
            <h1 className="display-1 fs-1 mb-5">Buscar Paciente</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Rut Paciente:" />
                <button class="btn btn-danger" type="submit">
                    Buscar Paciente
                    <img src="https://img.icons8.com/?size=20&id=83218&format=png" className="invert-1 ps-2" />
                </button>
            </div>
            <BtnCrearPaciente></BtnCrearPaciente>
        </form>
    );
};

export default BuscadorPaciente;