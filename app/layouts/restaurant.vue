<template>
  <div class="min-h-screen flex">
    <RestaurantSidebar />

    <div class="flex flex-1 flex-col">
      <RestaurantHeader />

      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
