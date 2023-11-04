import Alert from "../Alert";

const LoginForm = () => {
  return (
    <form className='p-5'>
        <img src="https://img.icons8.com/?size=100&id=83227&format=png" className='invert-1 mb-4' />
        <h1 className="fs-1 mb-5 text-white">Iniciar Sesion</h1>
        <input type='email' className='container rounded-3 border-0 bg-white p-2 mb-4' placeholder='Correo' />
        <input type='email' className='container rounded-3 border-0 bg-white p-2 mb-5' placeholder='Contraseña' />
        <br />
        <button type="submit" className='btn btn-dark container'>Ingresar</button>
        <Alert errorMessage='Error' type='danger'/>
    </form>
  );
};

export default LoginForm;
