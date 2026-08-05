<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()

const orderId = computed(() => route.params.id)
</script>

<template>
  <div class="container">

    <h1>
      Order #{{ orderId }}
    </h1>

    <p>
      Order details will be displayed here.
    </p>

  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  padding: 24px;
}
</style>
