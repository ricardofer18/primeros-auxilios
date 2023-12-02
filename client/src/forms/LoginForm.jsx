import { Formik, Form, Field } from "formik"
import useUserStore from "../store/userStore"
import { useNavigate } from "react-router-dom"
import loginService from "../services/loginService"

const LoginForm = () => {
  const saveUserData = useUserStore((state) => state.saveUserData)
  const navigate = useNavigate()

  const handleLogin = async (values) => {
    const login = await loginService(values)
    if (login === false) {
      alert("Las credenciales entregadas son incorrectas")
    } else {
      await saveUserData(login.userData)
      navigate("/home")
    }
  }

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleLogin(values)
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form className='p-5'>
            <img
              src='https://img.icons8.com/?size=100&id=83227&format=png'
              className='invert-1 mb-4'
            />
            <h1 className='fs-1 mb-5 text-white'>Iniciar Sesion</h1>
            <Field
              type='email'
              className='container rounded-3 border-0 bg-white p-2 mb-4'
              placeholder='Correo'
              name='email'
            />
            <Field
              type='password'
              className='container rounded-3 border-0 bg-white p-2 mb-5'
              placeholder='Contraseña'
              name='password'
            />
            <br />
            <button
              type='submit'
              disabled={isSubmitting}
              className='btn btn-dark container'
            >
              Ingresar
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default LoginForm
