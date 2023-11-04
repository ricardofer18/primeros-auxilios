import useUserStore from "../store/userStore"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const useIsLoggedUser = () => {
  const userData = useUserStore((state) => state.user)
  const navigate = useNavigate()

  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    if (userData.accessToken !== undefined) {
      setIsLogged(true)
    } else {
      navigate("/")
    }
  }, [userData.accessToken, navigate])

  return isLogged
}

export default useIsLoggedUser
