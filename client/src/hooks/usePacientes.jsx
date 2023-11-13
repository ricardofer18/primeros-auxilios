import { useEffect } from "react"
import usePacienteStore from "../store/pacienteStore"

const usePacientes = (setError, setLoading) => {
  const fetchPacientes = usePacienteStore((state) => state.fetchPacientes)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchPacientes()
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [fetchPacientes, setError, setLoading])
}

export default usePacientes
