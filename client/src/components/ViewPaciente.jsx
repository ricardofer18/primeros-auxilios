import FichaPreview from "./FichaPreview"
import Paciente from "./Paciente"

const ViewPaciente = () => {
    return (
        <div>
            <Paciente></Paciente>
            <div className='row mx-auto p-5 pt-0 mt-0'>
                <div className="row mx-auto col-12 bg-secondary-subtle rounded-bottom border-top border-dark p-5">
                    <h1 className="display-1 fs-1 text-center">Fichas Paciente</h1>
                    <FichaPreview></FichaPreview>
                </div>
            </div>
        </div>
    )
}

export default ViewPaciente