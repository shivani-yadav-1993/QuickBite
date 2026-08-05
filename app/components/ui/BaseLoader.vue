<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})
</script>

<template>
  <div
    class="qb-loader"
    :class="`qb-loader--${props.size}`"
  />
</template>

<style scoped>
.qb-loader {
  border: 3px solid #f3f3f3;
  border-top: 3px solid var(--primary);
  border-radius: 50%;
  animation: spin .8s linear infinite;
}

.qb-loader--sm {
  width: 20px;
  height: 20px;
}

.qb-loader--md {
  width: 32px;
  height: 32px;
}

.qb-loader--lg {
  width: 48px;
  height: 48px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
