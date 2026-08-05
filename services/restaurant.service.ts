import api from './api.service'
import { API } from '~constants/api'
import type { Restaurant } from '~types/restaurant'

export const useRestaurantService = () => {
  const getRestaurants = async () => {
    return await api.get<Restaurant[]>(API.RESTAURANTS)
  }

  const getRestaurant = async (id: number) => {
    return await api.get<Restaurant>(`${API.RESTAURANTS}/${id}`)
  }

  return {
    getRestaurants,
    getRestaurant
  }
}
