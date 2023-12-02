const FiltroFicha = () => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
        <label className="fs-5 mb-2">Buscar por fecha:</label>
        <input type='date' className='container rounded-3 border-0 bg-white p-2 mb-5' />
        <button className="btn btn-danger bg-red container fs-5">Mas Recientes</button>
    </form>
  );
};

export default FiltroFicha;
