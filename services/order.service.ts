import api from './api.service'

export const useOrderService = () => {
  const getOrders = () =>
    api.get('/orders')

  const getOrder = (id: number) =>
    api.get(`/orders/${id}`)

  const placeOrder = (payload: unknown) =>
    api.post('/orders', payload)

  return {
    getOrders,
    getOrder,
    placeOrder
  }
}
