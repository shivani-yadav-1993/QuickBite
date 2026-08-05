<script setup lang="ts">
definePageMeta({
  layout: 'restaurant'
})

import BaseButton from '~/components/ui/BaseButton.vue'
import BaseCard from '~/components/ui/BaseCard.vue'

const stats = [
  {
    title: "Today's Orders",
    value: 42
  },
  {
    title: 'Menu Items',
    value: 85
  },
  {
    title: 'Revenue',
    value: '₹12,540'
  },
  {
    title: 'Rating',
    value: '4.7'
  }
]
</script>

<template>
  <div class="container">

    <h1>Restaurant Dashboard</h1>

    <div class="dashboard-grid">

      <BaseCard
        v-for="stat in stats"
        :key="stat.title"
      >
        <h3>{{ stat.title }}</h3>

        <h2>{{ stat.value }}</h2>
      </BaseCard>

    </div>

    <BaseButton
      label="Manage Menu"
    />

  </div>
</template>

<style scoped>
.container {
  padding: 24px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  margin: 24px 0;
}
</style>
