<script setup lang="ts">
import RestaurantGrid from './RestaurantGrid.vue'
</script>

<template>
  <section class="featured-restaurants">
    <div class="section-header">
      <h2>Featured Restaurants</h2>

      <NuxtLink to="/restaurants">
        View All
      </NuxtLink>
    </div>

    <RestaurantGrid />
  </section>
</template>

<style scoped>
.featured-restaurants {
  padding: 48px 0;
}

.section-header {
  max-width: 1440px;
  margin: auto;
  padding: 0 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;
}

.section-header a {
  color: #fc8019;
  font-weight: 600;
  text-decoration: none;
}
</style>