<script setup lang="ts">
interface Props {
  width?: string
  height?: string
  radius?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '20px',
  radius: '8px'
})
</script>

<template>
  <div
    class="qb-skeleton"
    :style="{
      width: props.width,
      height: props.height,
      borderRadius: props.radius
    }"
  />
</template>

<style scoped>
.qb-skeleton {
  background: linear-gradient(
    90deg,
    #f2f2f2 25%,
    #e6e6e6 50%,
    #f2f2f2 75%
  );

  background-size: 200% 100%;

  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  from {
    background-position: 200% 0;
  }

  to {
    background-position: -200% 0;
  }
}
</style>
