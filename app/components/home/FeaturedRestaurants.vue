<script setup lang="ts">
import RestaurantGrid from './RestaurantGrid.vue'

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
  <section class="featured-restaurants">

    <div class="section-header">
      <h2>Featured Restaurants</h2>

      <NuxtLink to="/restaurants">
        View All
      </NuxtLink>
    </div>

    <RestaurantGrid
      :restaurants="restaurants"
    />

  </section>
</template>

<style scoped>
.featured-restaurants {
  padding: 48px 0;
}

.section-header {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 24px;
}

.section-header a {
  color: var(--primary);

  font-weight: 600;
}
</style>
