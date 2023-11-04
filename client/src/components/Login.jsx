import logo from "../assets/inacap.svg"
import Container from "./container"
import LoginForm from "./Forms/LoginForm"

const Login = () => {
  return (
    <Container>
      <div className='col-4 text-center p-5 vertical-align bg-red bg-shadow'>
        <LoginForm></LoginForm>
      </div>
      <div className='col-8 text-center row mx-auto vertical-align'>
        <img src={logo} className='col-8 mx-auto pt-5 mt-5' />
        <h1 className='col-12 text-secondary'>Sala Primeros Auxilios</h1>
      </div>
    </Container>
  )
}

export default Login
