import api from './api.service'
import type { User } from '../types/user'

export const useUserService = () => {
  const getProfile = () =>
    api.get<User>('/profile')

  const updateProfile = (payload: Partial<User>) =>
    api.put('/profile', payload)

  return {
    getProfile,
    updateProfile
  }
}
