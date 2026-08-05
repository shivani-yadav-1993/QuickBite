<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import HeroBanner from '~/components/home/HeroBanner.vue'
import CategorySlider from '~/components/home/CategorySlider.vue'
import FeaturedRestaurants from '~/components/home/FeaturedRestaurants.vue'
import OfferBanner from '~/components/home/OfferBanner.vue'

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
    image: 'https://picsum.photos/400/250?random=1',
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.5,
    deliveryTime: '25 mins'
  },
  {
    id: 2,
    image: 'https://picsum.photos/400/250?random=2',
    name: 'Burger Hub',
    cuisine: 'Fast Food',
    rating: 4.3,
    deliveryTime: '20 mins'
  },
  {
    id: 3,
    image: 'https://picsum.photos/400/250?random=3',
    name: 'Biryani House',
    cuisine: 'Indian',
    rating: 4.8,
    deliveryTime: '30 mins'
  }
]
</script>

<template>
  <div class="home-page">

    <HeroBanner />

    <div class="container">

      <CategorySlider />

      <OfferBanner />

      <FeaturedRestaurants
        :restaurants="restaurants"
      />

    </div>

  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
}

.container {
  max-width: 1280px;
  margin: auto;
  padding: 24px;
}
</style>
