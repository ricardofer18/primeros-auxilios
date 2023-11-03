const PacientePreview = () => {
    return (
      <button className="row mx-auto bg-white rounded shadow p-4 border-0 mb-4 mt-4">
          <div className='col-4 p-4 border-end'>
              <img src="https://img.icons8.com/?size=1080&id=85147&format=png" className='col-8' />
          </div>
          <div className="col-8 row mx-auto">
              <p className="col-6 text-start fs-5 display-1 mb-4">Nro. Fichas: 2</p>
              <p className="col-6 text-end fs-5 display-1">Fecha: dd/mm/aaaa</p>
              <h1 className="text-start fs-4 display-1 large-text">Nombre: Fernando Ricardez</h1>
              <h1 className="text-start fs-4 display-1 large-text">Rut: 20.327.562</h1>
              <h1 className="text-start fs-4 display-1 large-text">Edad: 20</h1>
              <h1 className="text-start fs-4 display-1 large-text">Genero: Masculino</h1>
          </div>
      </button>
    );
  };
  
  export default PacientePreview;