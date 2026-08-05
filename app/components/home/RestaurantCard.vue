<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  name: string
  image: string
  cuisine: string
  rating: number
  deliveryTime: string
  priceForTwo: string
  isVeg?: boolean
}

defineProps<Props>()
</script>

<template>
  <article class="card">
    <div class="image-wrapper">
      <img
        :src="image"
        :alt="name"
        class="image"
      >

      <span
        v-if="isVeg"
        class="veg"
      >
        VEG
      </span>

      <button class="wishlist">
        <Icon
          icon="mdi:heart-outline"
          width="20"
        />
      </button>
    </div>

    <div class="content">
      <div class="title-row">
        <h3>{{ name }}</h3>

        <span class="rating">
          <Icon
            icon="mdi:star"
            width="14"
          />
          {{ rating }}
        </span>
      </div>

      <p class="cuisine">
        {{ cuisine }}
      </p>

      <div class="meta">
        <span>{{ deliveryTime }}</span>

        <span>•</span>

        <span>{{ priceForTwo }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0,0,0,.08);
  transition: .35s;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-8px);
}

.image-wrapper {
  position: relative;
  height: 220px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wishlist {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: rgba(255,255,255,.9);
  cursor: pointer;
}

.veg {
  position: absolute;
  left: 14px;
  top: 14px;
  background: #22c55e;
  color: white;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.content {
  padding: 20px;
}

.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #22c55e;
  color: white;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 13px;
}

.cuisine {
  color: #666;
  margin: 10px 0;
}

.meta {
  display: flex;
  gap: 10px;
  color: #888;
  font-size: 14px;
}
</style>