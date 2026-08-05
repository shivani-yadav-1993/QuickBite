<script setup lang="ts">
import RestaurantCard from './RestaurantCard.vue'

interface Restaurant {
  id: number
  image: string
  name: string
  cuisine: string
  rating: number
  deliveryTime: string
}

interface Props {
  restaurants: Restaurant[]
}

defineProps<Props>()
</script>

<template>
  <section class="restaurant-grid">

    <RestaurantCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :image="restaurant.image"
      :name="restaurant.name"
      :cuisine="restaurant.cuisine"
      :rating="restaurant.rating"
      :delivery-time="restaurant.deliveryTime"
    />

  </section>
</template>

<style scoped>
.restaurant-grid {
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  gap: 24px;

  padding: 24px 0;
}
</style>
