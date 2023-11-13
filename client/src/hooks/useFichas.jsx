import { useEffect } from "react"
import useFichaStore from "../store/fichaStore"

const useFichas = (setError, setLoading) => {
  const fetchFichas = useFichaStore((state) => state.fetchFichas)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchFichas()
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
}

export default useFichas
