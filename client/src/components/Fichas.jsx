import FichaPreview from "./FichaPreview";
import FiltroFicha from "./Forms/FiltroFichas";

const Fichas = () => {
    return (
        <div className='col-10 mx-auto row text-center'>
            <div className='col-3 bg-secondary-subtle mt-4 mb-4 rounded p-5'>
                <h1 className="mb-5">Filtros</h1>
                <FiltroFicha></FiltroFicha>
            </div>
            <div className='col-8 p-5 pt-4 pb-4 row mx-auto m-4 bg-secondary-subtle rounded'>
                <FichaPreview></FichaPreview>
                <FichaPreview></FichaPreview>
                <FichaPreview></FichaPreview>
            </div>
        </div>
    );
};

export default Fichas;
