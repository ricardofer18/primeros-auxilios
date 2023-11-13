import { create } from "zustand";
import { fetchAllPacientes } from "../services/pacienteService";

const usePacienteStore = create((set) => ({
  pacientes: [],
  fetchPacientes: async () => {
    const response = await fetchAllPacientes()
    set(() => ({ pacientes: response.data }))
  }
}))

export default usePacienteStore