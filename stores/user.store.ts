import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '../types/user'

export const useUserStore = defineStore('user', () => {
  const profile = ref<User | null>(null)

  return {
    profile
  }
})
