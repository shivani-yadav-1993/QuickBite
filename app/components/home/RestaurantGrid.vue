<script setup lang="ts">
import RestaurantCard from './RestaurantCard.vue'

import { restaurants } from '../../../constants/restaurants'
</script>

<template>
  <section class="grid">
    <RestaurantCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      v-bind="restaurant"
    />
  </section>
</template>

<style scoped>
.grid {
  max-width: 1440px;
  margin: auto;
  padding: 0 32px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>