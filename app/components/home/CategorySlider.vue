<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const selectedCategory = ref('Pizza')

import { categories } from '../../../constants/categories'
</script>

<template>
  <section class="categories">
    <button v-for="category in categories" :key="category.name" :class="{ active: selectedCategory === category.name }"
      @click="selectedCategory = category.name">
      <Icon :icon="category.icon" width="26" />

      <span>{{ category.name }}</span>
    </button>
  </section>
</template>

<style scoped>
.categories {
  max-width: 1440px;
  margin: 50px auto;
  padding: 0 32px;
  display: flex;
  gap: 18px;
  overflow-x: auto;
  scrollbar-width: none;
}

.categories::-webkit-scrollbar {
  display: none;
}

button {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 18px;
  padding: 14px 22px;
  background: white;
  cursor: pointer;
  transition: .3s;
  box-shadow: 0 10px 24px rgba(0, 0, 0, .06);
}

button:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 32px rgba(0, 0, 0, .08);
}

button.active {
  background: #fc8019;
  color: white;
}

span {
  font-weight: 600;
  white-space: nowrap;
}
</style>