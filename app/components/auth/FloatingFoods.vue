<script setup lang="ts">
import { Icon } from '@iconify/vue'

const foods = [
  {
    icon: 'twemoji:pizza',
    top: '10%',
    left: '10%',
    delay: '0s'
  },
  {
    icon: 'twemoji:hamburger',
    top: '18%',
    right: '12%',
    delay: '2s'
  },
  {
    icon: 'twemoji:french-fries',
    bottom: '12%',
    left: '10%',
    delay: '3s'
  },
  {
    icon: 'twemoji:taco',
    bottom: '15%',
    right: '10%',
    delay: '4s'
  },
  {
    icon: 'twemoji:doughnut',
    top: '55%',
    left: '4%',
    delay: '5s'
  },
  {
    icon: 'twemoji:cup-with-straw',
    top: '42%',
    right: '5%',
    delay: '1s'
  },
  {
    icon: 'twemoji:green-salad',
    top: '8%',
    left: '45%',
    delay: '6s'
  },
  {
    icon: 'twemoji:poultry-leg',
    bottom: '30%',
    right: '35%',
    delay: '2.5s'
  }
]
</script>

<template>
  <div class="foods">
    <Icon
      v-for="(food, index) in foods"
      :key="index"
      :icon="food.icon"
      class="food"
      :style="food"
    />
  </div>
</template>

<style scoped>
.foods {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.food {
  position: absolute;
  font-size: 42px;
  opacity: .22;
  animation: floatFood 8s ease-in-out infinite;
}

@keyframes floatFood {
  0% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-28px) rotate(10deg);
  }

  100% {
    transform: translateY(0) rotate(0deg);
  }
}
</style>