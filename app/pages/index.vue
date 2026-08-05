<script setup lang="ts">
import HeroBanner from '~/components/home/HeroBanner.vue'
import CategorySlider from '~/components/home/CategorySlider.vue'
import OfferBanner from '~/components/home/OfferBanner.vue'
import FeaturedRestaurants from '~/components/home/FeaturedRestaurants.vue'
</script>

<template>
  <main class="home-page">
    <HeroBanner />

    <CategorySlider />

    <OfferBanner />

    <FeaturedRestaurants />
  </main>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding-bottom: 80px;
}
</style>