const loginService = async (credentials) => {
  const login = await fetch("http://localhost:5000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error)

  if (login.success === false) {
    return false
  }

  return login
}

export default loginService
