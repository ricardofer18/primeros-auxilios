import { create } from "zustand";
import { fetchAllFichas } from "../services/fichaService";

const useFichaStore = create((set) => ({
  fichas: [],
  fetchFichas: async () => {
    const response = await fetchAllFichas()
    set(() => ({ fichas: response.data }))
  }
}))

export default useFichaStore