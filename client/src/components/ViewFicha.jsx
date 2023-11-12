import Ficha from "./Ficha"
import Paciente from "./Paciente"

const ViewFicha = () => {
    return (
        <div>
            <Paciente></Paciente>
            <div className='row mx-auto p-5 pt-0 mt-0'>
                <div className="row mx-auto col-12 bg-secondary-subtle rounded-bottom border-top border-dark p-5">
                    <Ficha></Ficha>
                </div>
            </div>
        </div>
    )
}

export default ViewFicha