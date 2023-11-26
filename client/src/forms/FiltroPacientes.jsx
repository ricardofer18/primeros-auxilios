const FiltroPacientes = () => {
    return (
      <form onSubmit={(event) => event.preventDefault()}>
          <label className="fs-5 mb-2">Buscar por Nombre:</label>
          <input type='text' placeholder="Nombre:" className='container rounded-3 border-0 bg-white p-2 mb-5' />
          <label className="fs-5 mb-2">Buscar por Rut:</label>
          <input type='text' placeholder="Rut:" className='container rounded-3 border-0 bg-white p-2 mb-5' />
          <button className="btn btn-danger bg-red container fs-5">Buscar <img src='https://img.icons8.com/?size=24&id=83218&format=png' className="invert-1" /></button>
      </form>
    );
  };
  
  export default FiltroPacientes;
  