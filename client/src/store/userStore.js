import { create } from "zustand"

const useUserStore = create((set) => ({
  user: {},
  saveUserData: async (userData) => {
    try {
      const newUser = { ...userData }
      set(() => ({ user: newUser }))
      localStorage.setItem("accessToken", newUser.accessToken)
    } catch (error) {
      console.error("Error:", error)
    }
  },
  logoutUser: async () => {
    set(() => ({user: {}}))
    localStorage.removeItem('accessToken')
  }
}))

export default useUserStore
