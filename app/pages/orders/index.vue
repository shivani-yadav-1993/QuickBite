<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import BaseBadge from '~/components/ui/BaseBadge.vue'
import BaseCard from '~/components/ui/BaseCard.vue'

interface Order {
  id: number
  restaurant: string
  amount: string
  status: string
}

const orders: Order[] = [
  {
    id: 1001,
    restaurant: 'Pizza Palace',
    amount: '₹580',
    status: 'Delivered'
  },
  {
    id: 1002,
    restaurant: 'Burger Hub',
    amount: '₹340',
    status: 'Preparing'
  }
]
</script>

<template>
  <div class="container">

    <h1>My Orders</h1>

    <BaseCard
      v-for="order in orders"
      :key="order.id"
      hover
    >

      <div class="order">

        <div>

          <h3>
            {{ order.restaurant }}
          </h3>

          <p>
            Order #{{ order.id }}
          </p>

          <strong>
            {{ order.amount }}
          </strong>

        </div>

        <BaseBadge
          variant="success"
        >
          {{ order.status }}
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

.order {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
