<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

import { Motion } from 'motion-v'

import AuthBackground from '~/components/auth/AuthBackground.vue'
import AuthIllustration from '~/components/auth/AuthIllustration.vue'
import LoginCard from '~/components/auth/LoginCard.vue'
</script>

<template>
  <div class="login-page">
    <AuthBackground />

    <div class="container">
      <Motion
        class="left"
        :initial="{ opacity: 0, x: -80 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <AuthIllustration />
      </Motion>

      <Motion
        class="right"
        :initial="{ opacity: 0, x: 80 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <LoginCard />
      </Motion>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  position: relative;
  min-height: 100vh;
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1440px;
  margin: auto;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 80px;
  padding: 40px;
}

@media (max-width:1024px) {
  .container {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  .left {
    display: none;
  }
}
</style>