<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import FeaturedRestaurants from '~/components/home/FeaturedRestaurants.vue'

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
    image: 'https://picsum.photos/400/250?random=11',
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.6,
    deliveryTime: '25 mins'
  },
  {
    id: 2,
    image: 'https://picsum.photos/400/250?random=12',
    name: 'Burger Hub',
    cuisine: 'Fast Food',
    rating: 4.4,
    deliveryTime: '20 mins'
  }
]
</script>

<template>
  <div class="container">

    <h1>Restaurants</h1>

    <FeaturedRestaurants
      :restaurants="restaurants"
    />

  </div>
</template>

<style scoped>
.container{
  max-width:1280px;
  margin:auto;
  padding:24px;
}
</style>
