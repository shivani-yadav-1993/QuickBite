<script setup lang="ts">
import BaseBadge from '../ui/BaseBadge.vue'
import BaseCard from '../ui/BaseCard.vue'

interface Props {
  image: string
  name: string
  cuisine: string
  rating: number
  deliveryTime: string
}

defineProps<Props>()
</script>

<template>
  <BaseCard hover>

    <img
      :src="image"
      :alt="name"
      class="restaurant-image"
    />

    <div class="restaurant-content">

      <div class="restaurant-header">

        <h3>{{ name }}</h3>

        <BaseBadge variant="success">
          ⭐ {{ rating }}
        </BaseBadge>

      </div>

      <p>
        {{ cuisine }}
      </p>

      <small>
        {{ deliveryTime }}
      </small>

    </div>

  </BaseCard>
</template>

<style scoped>
.restaurant-image {
  width: 100%;
  height: 220px;

  object-fit: cover;

  border-radius: 10px;
}

.restaurant-content {
  margin-top: 16px;
}

.restaurant-header {
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 8px;
}

.restaurant-content p {
  color: var(--text-secondary);

  margin-bottom: 8px;
}
</style>
