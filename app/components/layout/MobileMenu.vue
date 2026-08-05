<script setup lang="ts">
import BaseDrawer from '../ui/BaseDrawer.vue'

interface Props {
  modelValue: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const close = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <BaseDrawer
    title="Menu"
    :model-value="modelValue"
    @update:model-value="close"
  >
    <nav class="mobile-menu">

      <NuxtLink
        to="/"
        @click="close"
      >
        Home
      </NuxtLink>

      <NuxtLink
        to="/restaurants"
        @click="close"
      >
        Restaurants
      </NuxtLink>

      <NuxtLink
        to="/wishlist"
        @click="close"
      >
        Wishlist
      </NuxtLink>

      <NuxtLink
        to="/orders"
        @click="close"
      >
        Orders
      </NuxtLink>

      <NuxtLink
        to="/profile"
        @click="close"
      >
        Profile
      </NuxtLink>

    </nav>
  </BaseDrawer>
</template>

<style scoped>
.mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-menu a {
  color: var(--text-primary);
  font-weight: 600;
}
</style>
