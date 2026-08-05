import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Restaurant } from '~types/restaurant'

export const useRestaurantStore = defineStore(
  'restaurant',
  () => {
    const restaurants = ref<Restaurant[]>([])

    const selectedRestaurant =
      ref<Restaurant | null>(null)

    return {
      restaurants,
      selectedRestaurant
    }
  }
)
