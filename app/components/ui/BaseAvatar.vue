<script setup lang="ts">
interface Props {
  src?: string
  alt?: string
  size?: number
}

withDefaults(
  defineProps<Props>(),
  {
    src: '',
    alt: 'Avatar',
    size: 48
  }
)
</script>

<template>
  <img
    class="qb-avatar"
    :src="src"
    :alt="alt"
    :style="{
      width: `${size}px`,
      height: `${size}px`
    }"
  />
</template>

<style scoped>
.qb-avatar {
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border-color);
}
</style>
