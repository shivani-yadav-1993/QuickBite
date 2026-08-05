<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import SearchBar from './SearchBar.vue'
import AuthIllustration from '../auth/AuthIllustration.vue'

import hero1 from '~/assets/images/hero/hero-1.jpg'
import hero2 from '~/assets/images/hero/hero-2.jpg'
import hero3 from '~/assets/images/hero/hero-3.jpg'
import hero4 from '~/assets/images/hero/hero-4.jpg'

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  primaryButton: string
  secondaryButton: string
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: 'Hot Pizza,\nDelivered Fast',
    subtitle: 'Fresh From The Oven',
    description:
      'Discover the best pizza places near you with lightning-fast delivery.',
    image: hero1,
    primaryButton: 'Order Now',
    secondaryButton: 'View Menu'
  },
  {
    id: 2,
    title: 'Authentic\nIndian Flavours',
    subtitle: 'Biryani Special',
    description:
      'Taste delicious biryanis and Indian delicacies from top-rated restaurants.',
    image: hero2,
    primaryButton: 'Explore',
    secondaryButton: 'Top Restaurants'
  },
  {
    id: 3,
    title: 'Sweet Moments,\nEvery Day',
    subtitle: 'Desserts & Drinks',
    description:
      'From waffles to milkshakes, satisfy every craving instantly.',
    image: hero3,
    primaryButton: 'Order Desserts',
    secondaryButton: 'See Offers'
  },
  {
    id: 4,
    title: 'Sip.\nRelax.\nRepeat.',
    subtitle: 'Coffee & Milkshakes',
    description:
      'Refreshing beverages delivered chilled to your doorstep.',
    image: hero4,
    primaryButton: 'Order Drinks',
    secondaryButton: 'Browse Cafés'
  }
]

const currentSlide = ref(0)

const activeSlide = computed(() => {
  const slide = slides[currentSlide.value]

  if (!slide) {
    return slides[0]!
  }

  return slide
})

let timer: ReturnType<typeof setInterval>

const nextSlide = () => {
  currentSlide.value =
    currentSlide.value === slides.length - 1
      ? 0
      : currentSlide.value + 1
}

const previousSlide = () => {
  currentSlide.value =
    currentSlide.value === 0
      ? slides.length - 1
      : currentSlide.value - 1
}

const startAutoPlay = () => {
  timer = setInterval(nextSlide, 5000)
}

const stopAutoPlay = () => {
  clearInterval(timer)
}

onMounted(startAutoPlay)

onBeforeUnmount(stopAutoPlay)
</script>

<template>
  <section class="hero" :style="{
    backgroundImage:
      `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.45)),url(${activeSlide.image})`
  }">
    <div class="overlay">
      <div class="content">
        <span class="tag">
          🔥 {{ activeSlide.subtitle }}
        </span>

        <h1>
          {{ activeSlide.title }}
        </h1>

        <p>
          {{ activeSlide.description }}
        </p>

        <SearchBar />

        <div class="actions">
          <button class="primary">
            {{ activeSlide.primaryButton }}
          </button>

          <button class="secondary">
            {{ activeSlide.secondaryButton }}
          </button>
        </div>
        <div class="stats">
          <div class="stat">
            <h3>1000+</h3>
            <span>Restaurants</span>
          </div>

          <div class="stat">
            <h3>30 min</h3>
            <span>Average Delivery</span>
          </div>

          <div class="stat">
            <h3>4.8★</h3>
            <span>Customer Rating</span>
          </div>
        </div>
      </div>

      <div class="illustration">
        <AuthIllustration />
      </div>
    </div>

    <button class="nav prev" @click="previousSlide">
      <Icon icon="mdi:chevron-left" width="30" />
    </button>

    <button class="nav next" @click="nextSlide">
      <Icon icon="mdi:chevron-right" width="30" />
    </button>

    <div class="dots">
      <span v-for="(_, index) in slides" :key="index" :class="{ active: currentSlide === index }"
        @click="currentSlide = index" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 720px;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  transition: background-image .8s ease-in-out;
}

.overlay {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 80px 32px;
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 48px;
  align-items: center;
}

.tag {
  display: inline-flex;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .18);
  backdrop-filter: blur(12px);
  color: white;
  font-weight: 600;
}

h1 {
  margin: 20px 0;
  white-space: pre-line;
  color: white;
  font-size: 68px;
  line-height: 1.05;
}

p {
  color: rgba(255, 255, 255, .9);
  max-width: 600px;
  font-size: 18px;
  margin-bottom: 32px;
}

.actions {
  display: flex;
  gap: 16px;
  margin-top: 28px;
}

.primary,
.secondary {
  border: none;
  cursor: pointer;
  border-radius: 16px;
  padding: 14px 28px;
  font-size: 16px;
  transition: .3s;
}

.primary {
  background: #fc8019;
  color: white;
}

.primary:hover {
  transform: translateY(-3px);
}

.secondary {
  background: rgba(255, 255, 255, .16);
  color: white;
  border: 1px solid rgba(255, 255, 255, .3);
}

.stats {
  margin-top: 42px;
  display: flex;
  gap: 40px;
}

.stat h3 {
  color: white;
  font-size: 30px;
}

.stat span {
  color: rgba(255, 255, 255, .85);
}

.illustration {
  display: flex;
  justify-content: center;
}

.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: rgba(255, 255, 255, .16);
  color: white;
  backdrop-filter: blur(12px);
}

.prev {
  left: 24px;
}

.next {
  right: 24px;
}

.dots {
  position: absolute;
  left: 50%;
  bottom: 36px;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  cursor: pointer;
  background: rgba(255, 255, 255, .4);
  transition: .3s;
}

.dots span.active {
  width: 34px;
  background: white;
}

@media (max-width: 1024px) {
  .overlay {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .illustration {
    display: none;
  }

  .stats {
    justify-content: center;
  }

  h1 {
    font-size: 48px;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 620px;
  }

  .stats {
    flex-direction: column;
    gap: 20px;
  }

  .actions {
    flex-direction: column;
  }

  .nav {
    display: none;
  }
}
</style>