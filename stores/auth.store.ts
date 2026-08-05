import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '~types/user'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  const token = ref('')

  const isAuthenticated = computed(() => !!token.value)

  function setUser(data: User) {
    user.value = data
  }

  function setToken(value: string) {
    token.value = value
  }

  function logout() {
    user.value = null
    token.value = ''
  }

  return {
    user,
    token,
    isAuthenticated,
    setUser,
    setToken,
    logout
  }
})
