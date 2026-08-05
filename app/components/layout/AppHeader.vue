<script setup lang="ts">
import { Icon } from '@iconify/vue'

const links = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Restaurants',
    to: '/restaurants'
  },
  {
    label: 'Offers',
    to: '/offers'
  },
  {
    label: 'Contact',
    to: '/contact'
  }
]
</script>

<template>
  <header class="header">
    <div class="container">
      <NuxtLink
        to="/"
        class="logo"
      >
        🍔 QuickBite
      </NuxtLink>

      <nav>
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="actions">
        <NuxtLink to="/wishlist">
          <Icon
            icon="mdi:heart-outline"
            width="24"
          />
        </NuxtLink>

        <NuxtLink to="/cart">
          <Icon
            icon="mdi:cart-outline"
            width="24"
          />
        </NuxtLink>

        <NuxtLink
          to="/login"
          class="login-btn"
        >
          Login
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(18px);
  background: rgba(255,255,255,.92);
  border-bottom: 1px solid #f1f1f1;
}

.container {
  max-width: 1440px;
  margin: auto;
  height: 80px;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 30px;
  font-weight: 700;
  color: #fc8019;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 36px;
}

nav a {
  color: #222;
  text-decoration: none;
  font-weight: 600;
  transition: .3s;
}

nav a:hover {
  color: #fc8019;
}

.actions {
  display: flex;
  gap: 18px;
  align-items: center;
}

.actions a {
  color: inherit;
}

.login-btn {
  background: #fc8019;
  color: white !important;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 12px;
}
</style>