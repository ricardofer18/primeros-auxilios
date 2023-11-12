// eslint-disable-next-line react/prop-types
const BtnCrearPaciente = ({onClick}) => {
    return (
      <button className="row mx-auto bg-white rounded shadow p-4 border-0 mb-4 mt-4" onClick={onClick} type="button">
        <img src="https://img.icons8.com/?size=1080&id=83136&format=png" className="col-2 mx-auto" />
        <h1 className="col-12 display-1 fs-1 text-center">Agregar Paciente</h1>
      </button>
    );
  };
  
  export default BtnCrearPaciente;
