import React from 'react';
import logo from '../assets/inacap.svg'

const Container = ({ children }) => {
  const bgRed = {
    backgroundColor: 'rgba(226,31,24,255)'
  };
  return (
    <>
        <div className="col-4 text-center p-5" style={bgRed}>
            <form className='p-5'>
                <h1 className="fs-1 mb-5 text-dark">Iniciar Sesion</h1>
                <input type='email' className='container rounded-3 border-0 bg-white p-2 mb-4' placeholder='Correo' />
                <input type='email' className='container rounded-3 border-0 bg-white p-2 mb-5' placeholder='Contraseña' />
                <br/>
                <button type="submit" className='btn btn-danger container'>Ingresar</button>
            </form>
        </div>
        <div className='col-8 text-center pt-5'>
            <img src={logo} className='col-6 mt-5 pt-5' />
            <h1 className='text-secondary'>Sala Primeros Auxilios</h1>
        </div>
    </>
  );
};

export default Container;
