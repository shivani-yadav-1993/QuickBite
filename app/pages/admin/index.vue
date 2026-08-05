<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

import BaseCard from '~/components/ui/BaseCard.vue'
</script>

<template>
  <div class="container">

    <h1>Admin Dashboard</h1>

    <div class="dashboard-grid">

      <BaseCard>
        <h3>Total Orders</h3>
        <h2>120</h2>
      </BaseCard>

      <BaseCard>
        <h3>Total Restaurants</h3>
        <h2>35</h2>
      </BaseCard>

      <BaseCard>
        <h3>Total Users</h3>
        <h2>850</h2>
      </BaseCard>

      <BaseCard>
        <h3>Revenue</h3>
        <h2>₹2,45,000</h2>
      </BaseCard>

    </div>

  </div>
</template>

<style scoped>
.container {
  padding: 24px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
}
</style>
