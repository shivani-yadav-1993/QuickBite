<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue'
</script>

<template>
  <nav class="navbar">

    <div class="navbar__logo">
      QuickBite
    </div>

    <div class="navbar__menu">

      <NuxtLink to="/">
        Home
      </NuxtLink>

      <NuxtLink to="/restaurants">
        Restaurants
      </NuxtLink>

      <NuxtLink to="/wishlist">
        Wishlist
      </NuxtLink>

      <NuxtLink to="/orders">
        Orders
      </NuxtLink>

    </div>

    <div class="navbar__actions">
      <BaseButton
        label="Login"
        size="sm"
      />
    </div>

  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 0 32px;
}

.navbar__logo {
  font-size: 24px;
  font-weight: 700;

  color: var(--primary);
}

.navbar__menu {
  display: flex;
  gap: 32px;
}

.navbar__menu a {
  color: var(--text-primary);
  font-weight: 500;
}

.navbar__menu a.router-link-active {
  color: var(--primary);
}

.navbar__actions {
  display: flex;
  align-items: center;
}
</style>
