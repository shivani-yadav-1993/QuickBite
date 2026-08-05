import { storeToRefs } from 'pinia'

import { useAuthStore } from '~stores/auth.store'

export const useAuth = () => {
  const authStore = useAuthStore()

  const {
    user,
    token,
    isAuthenticated
  } = storeToRefs(authStore)

  return {
    user,
    token,
    isAuthenticated,

    setUser: authStore.setUser,
    setToken: authStore.setToken,
    logout: authStore.logout
  }
}
