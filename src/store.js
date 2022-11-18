import axios from 'axios'
import create from 'zustand'
import { persist } from 'zustand/middleware'

const useAccountStore = create(
  persist((set) => ({
    accounts: [],
    accDetail: {},
    setAccs: async (url) => {
      const data = await axios.get(url)
      set({ accounts: data.data })
    },
    setDetail: (id) => {
      set((state) => ({
        accDetail: state.accounts.find((acc) => acc.id === id)
      }))
    },
    currentPage: 1,
    setCurrentPage: (n) => {
      set({ currentPage: n })
    },
    nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
    prevPage: () => set((state) => ({ currentPage: state.currentPage - 1 }))
  }))
)

export default useAccountStore
