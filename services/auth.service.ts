import api from './api.service'
import type {
  LoginPayload,
  SignupPayload
} from '../types/auth'

export const useAuthService = () => {
  const login = (payload: LoginPayload) =>
    api.post('/auth/login', payload)

  const signup = (payload: SignupPayload) =>
    api.post('/auth/signup', payload)

  const logout = () =>
    Promise.resolve()

  return {
    login,
    signup,
    logout
  }
}
