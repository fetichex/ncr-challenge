import axios from 'axios'
import create from 'zustand'

const useAccountStore = create((set) => ({
  accounts: [],
  isLoading: true,
  getAcc: async (url) => {
    const data = await axios.get(url)
    set({ accounts: data.data })
  },
  currentPage: 1,
  setCurrentPage: (n) => {
    set({ currentPage: n })
  },
  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  prevPage: () => set((state) => ({ currentPage: state.currentPage - 1 }))
}))

export default useAccountStore
