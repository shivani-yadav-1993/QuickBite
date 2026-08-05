<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const search = ref('')
</script>

<template>
  <div class="search">
    <Icon
      icon="mdi:magnify"
      width="24"
    />

    <input
      v-model="search"
      placeholder="Search restaurants, cuisines..."
    >

    <button>
      Search
    </button>
  </div>
</template>

<style scoped>
.search {
  display: flex;
  align-items: center;
  gap: 14px;
  background: white;
  border-radius: 20px;
  padding: 10px 12px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, .08);
}

.search input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
}

button {
  border: none;
  background: #fc8019;
  color: white;
  border-radius: 14px;
  padding: 12px 24px;
  cursor: pointer;
}
</style>