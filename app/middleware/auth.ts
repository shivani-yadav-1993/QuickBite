/**
 * Authentication Middleware
 *
 * Redirects unauthenticated users to the login page.
 */

import { navigateTo } from '#app'
import { useAuthStore } from '~/stores/auth.store'

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()

  if (!authStore.isAuthenticated) {
    return navigateTo('/login')
  }
})
