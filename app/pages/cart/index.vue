<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import BaseButton from '~/components/ui/BaseButton.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
</script>

<template>
  <div class="container">

    <h1>Your Cart</h1>

    <BaseCard>

      <p>
        Your cart is currently empty.
      </p>

      <BaseButton
        label="Continue Shopping"
      />

    </BaseCard>

  </div>
</template>

<style scoped>
.container{
  max-width:900px;
  margin:auto;
  padding:24px;
}
</style>
