const FichaPreview = () => {
  return (
    <button className="row mx-auto bg-white rounded shadow p-4 border-0 mb-4 mt-4">
        <div className='col-4 p-4 border-end'>
            <img src="https://img.icons8.com/?size=1080&id=98063&format=png" className='col-6' />
            <h1 className='fs-4 m-0'>Paciente:</h1>
            <h2 className='fs-4 display-1'>Fernando Ricardez</h2>
        </div>
        <div className="col-8">
            <p className="col-12 text-end fs-5 display-1">Fecha: dd/mm/aaaa</p>
            <h1 className="text-start fs-2 display-1 mb-4 large-text">Motivo: Frenillo del pene roto jaja que aweonao se equivoco sdfhsdjhfgjsfdhgjfshgjhdfgjdfsg</h1>
            <p className="text-start fs-5 large-text">Procedimiento: joven de piel color humilde llego sangrando al pabellon a las 13:00 hrs del dia jueves despues de clases el aweonao ajsdjsdfhjsdf.</p>
            <p className="text-end col-12 fs-5 display-1">Autor: Felipe Rogers</p>
        </div>
    </button>
  );
};

export default FichaPreview;
