<template>
  <div class="min-h-screen flex">
    <AdminSidebar />

    <div class="flex flex-1 flex-col">
      <AdminHeader />

      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
