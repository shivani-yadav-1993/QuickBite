<script setup lang="ts">
definePageMeta({
  layout: 'delivery'
})

import BaseBadge from '~/components/ui/BaseBadge.vue'
import BaseCard from '~/components/ui/BaseCard.vue'

interface DeliveryOrder {
  id: number
  customer: string
  address: string
  status: string
}

const deliveries: DeliveryOrder[] = [
  {
    id: 501,
    customer: 'Rahul Sharma',
    address: 'Baner, Pune',
    status: 'Pickup Pending'
  },
  {
    id: 502,
    customer: 'Priya Singh',
    address: 'Hinjewadi, Pune',
    status: 'On The Way'
  },
  {
    id: 503,
    customer: 'Amit Verma',
    address: 'Wakad, Pune',
    status: 'Delivered'
  }
]
</script>

<template>
  <div class="container">

    <h1>Delivery Dashboard</h1>

    <BaseCard
      v-for="delivery in deliveries"
      :key="delivery.id"
      hover
    >
      <div class="delivery-card">

        <div>

          <h3>
            {{ delivery.customer }}
          </h3>

          <p>
            {{ delivery.address }}
          </p>

          <small>
            Order #{{ delivery.id }}
          </small>

        </div>

        <BaseBadge variant="primary">
          {{ delivery.status }}
        </BaseBadge>

      </div>

    </BaseCard>

  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  padding: 24px;
}

.delivery-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
