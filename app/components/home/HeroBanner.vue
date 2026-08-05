<script setup lang="ts">
import { Motion } from 'motion-v'

import SearchBar from './SearchBar.vue'
import AuthIllustration from '../auth/AuthIllustration.vue'
</script>

<template>
  <section class="hero">
    <div class="container">
      <Motion
        class="content"
        :initial="{ opacity: 0, y: 40 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <span class="badge">
          🚀 India's Fastest Food Delivery
        </span>

        <h1>
          Delicious food,
          <br>
          delivered fast.
        </h1>

        <p>
          Discover restaurants, order your favourite meals and get them delivered
          fresh at your doorstep.
        </p>

        <SearchBar />
      </Motion>

      <Motion
        class="illustration"
        :initial="{ opacity: 0, x: 80 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 1 }"
      >
        <AuthIllustration />
      </Motion>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 70px 0;
}

.container {
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 0 32px;
}

.badge {
  display: inline-flex;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(252, 128, 25, .1);
  color: #fc8019;
  font-weight: 600;
}

h1 {
  margin: 20px 0;
  font-size: 64px;
  line-height: 1.1;
}

p {
  max-width: 540px;
  color: #666;
  font-size: 18px;
  margin-bottom: 36px;
}

@media (max-width: 1024px) {
  .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  p {
    margin-inline: auto;
  }

  .illustration {
    display: none;
  }

  h1 {
    font-size: 46px;
  }
}
</style>