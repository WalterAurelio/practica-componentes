import { create } from 'zustand';

export const useAuthProvider = create((set) => ({
  auth: true,
  setAuth: (value) => {
    set({ auth: value })
  }
}))