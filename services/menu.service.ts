import api from './api.service'
import type { MenuCategory } from '../types/menu'

export const useMenuService = () => {
  const getMenu = async (restaurantId: number) => {
    return await api.get<MenuCategory[]>(`/restaurants/${restaurantId}/menu`)
  }

  return {
    getMenu
  }
}
