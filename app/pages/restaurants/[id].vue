<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const route = useRoute()

const restaurantId = computed(() => route.params.id)
</script>

<template>
  <div class="container">

    <h1>
      Restaurant {{ restaurantId }}
    </h1>

    <p>
      Restaurant details page coming soon.
    </p>

  </div>
</template>

<style scoped>
.container{
  max-width:1280px;
  margin:auto;
  padding:24px;
}
</style>
