import FiltroPacientes from "./Forms/FiltroPacientes";
import PacientePreview from "./PacientePreview";

const Pacientes = () => {
    return (
        <div className='col-10 mx-auto row text-center'>
            <div className='col-3 bg-secondary-subtle mt-4 mb-4 rounded p-5'>
                <h1 className="mb-5">Filtros</h1>
                <FiltroPacientes></FiltroPacientes>
            </div>
            <div className='col-8 p-5 pt-4 pb-4 row mx-auto m-4 bg-secondary-subtle rounded'>
                <PacientePreview></PacientePreview>
                <PacientePreview></PacientePreview>
                <PacientePreview></PacientePreview>
            </div>
        </div>
    );
};

export default Pacientes;
