/**
 * Admin Middleware
 *
 * Allows only authenticated admins.
 * Role implementation will be added
 * once authentication API is integrated.
 */

import { navigateTo } from '#app'
import { useAuthStore } from '~/stores/auth.store'

export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()

  if (!authStore.isAuthenticated) {
    return navigateTo('/login')
  }

  /**
   * TODO:
   * if(authStore.user?.role !== 'admin')
   *    return navigateTo('/')
   */
})
