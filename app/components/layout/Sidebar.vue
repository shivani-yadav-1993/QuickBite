<script setup lang="ts">
interface MenuItem {
  label: string
  to: string
}

const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    to: '/admin'
  },
  {
    label: 'Restaurants',
    to: '/restaurants'
  },
  {
    label: 'Orders',
    to: '/orders'
  },
  {
    label: 'Wishlist',
    to: '/wishlist'
  },
  {
    label: 'Profile',
    to: '/profile'
  }
]
</script>

<template>
  <aside class="sidebar">

    <NuxtLink
      v-for="item in menuItems"
      :key="item.to"
      :to="item.to"
      class="sidebar__item"
    >
      {{ item.label }}
    </NuxtLink>

  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;
  min-height: 100vh;

  background: white;

  border-right: 1px solid var(--border-color);

  display: flex;
  flex-direction: column;

  padding: 24px 0;
}

.sidebar__item {
  padding: 14px 24px;

  color: var(--text-primary);

  transition: var(--transition-fast);
}

.sidebar__item:hover,
.sidebar__item.router-link-active {
  background: rgba(252, 128, 25, .1);
  color: var(--primary);
}
</style>
