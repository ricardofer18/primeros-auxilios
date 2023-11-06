import BuscadorPaciente from "./Forms/BuscadorPaciente";
import FichaForm from "./Forms/FichaForm";

const AddFicha = () => {
    return (
        <div className='col-10 mx-auto row text-center p-4 text-center'>
            <BuscadorPaciente></BuscadorPaciente>
            <FichaForm></FichaForm>
            <img src="https://img.icons8.com/?size=1080&id=88905&format=png" className="col-5 mx-auto" />
            <p className="fs-1 display-1">Soy tuya ricardo uwu</p>
        </div>
    );
};

export default AddFicha;
