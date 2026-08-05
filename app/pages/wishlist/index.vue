<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import RestaurantGrid from '~/components/home/RestaurantGrid.vue'

interface Restaurant {
  id: number
  image: string
  name: string
  cuisine: string
  rating: number
  deliveryTime: string
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    image: 'https://picsum.photos/400/250?random=31',
    name: 'Dominos',
    cuisine: 'Pizza',
    rating: 4.5,
    deliveryTime: '25 mins'
  },
  {
    id: 2,
    image: 'https://picsum.photos/400/250?random=32',
    name: 'Burger King',
    cuisine: 'Fast Food',
    rating: 4.3,
    deliveryTime: '20 mins'
  }
]
</script>

<template>
  <div class="container">

    <h1>Wishlist</h1>

    <RestaurantGrid
      :restaurants="restaurants"
    />

  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  margin: auto;
  padding: 24px;
}
</style>
