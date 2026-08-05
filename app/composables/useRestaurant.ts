import { storeToRefs } from 'pinia'

import { useRestaurantStore } from '~stores/restaurant.store'

export const useRestaurant = () => {
  const restaurantStore = useRestaurantStore()

  const {
    restaurants,
    selectedRestaurant
  } = storeToRefs(restaurantStore)

  return {
    restaurants,
    selectedRestaurant
  }
}
