<script setup lang="ts">
import chefAnimation from '~/assets/lottie/chef-making-pizza.json'
</script>

<template>
  <div class="illustration">
    <Vue3Lottie
      :animationData="chefAnimation"
      :height="500"
      :width="500"
      :loop="true"
      :autoplay="true"
    />
  </div>
</template>

<style scoped>
.illustration {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

:deep(svg) {
  width: 100%;
  max-width: 500px;
  height: auto;
}
</style>