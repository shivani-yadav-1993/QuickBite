<script setup lang="ts">
interface Category {
  id: number
  name: string
}

const categories: Category[] = [
  { id: 1, name: 'Pizza' },
  { id: 2, name: 'Burger' },
  { id: 3, name: 'Chinese' },
  { id: 4, name: 'Biryani' },
  { id: 5, name: 'Desserts' },
  { id: 6, name: 'South Indian' },
  { id: 7, name: 'North Indian' }
]
</script>

<template>
  <section class="category-slider">

    <button
      v-for="category in categories"
      :key="category.id"
      class="category-chip"
    >
      {{ category.name }}
    </button>

  </section>
</template>

<style scoped>
.category-slider {
  display: flex;
  gap: 16px;

  overflow-x: auto;

  padding: 24px 0;
}

.category-chip {
  white-space: nowrap;

  padding: 12px 20px;

  border-radius: 999px;

  border: none;

  background: #f5f5f5;

  transition: var(--transition-fast);
}

.category-chip:hover {
  background: var(--primary);
  color: white;
}
</style>
