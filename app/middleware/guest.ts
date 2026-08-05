/**
 * Guest Middleware
 *
 * Prevents authenticated users
 * from accessing login/signup pages.
 */

import { navigateTo } from '#app'
import { useAuthStore } from '~/stores/auth.store'

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()

  if (authStore.isAuthenticated) {
    return navigateTo('/')
  }
})
