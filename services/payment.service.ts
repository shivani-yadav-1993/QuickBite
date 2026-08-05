import api from './api.service'

export const usePaymentService = () => {
  const createPayment = (payload: unknown) =>
    api.post('/payment', payload)

  return {
    createPayment
  }
}
