<script setup lang="ts">
interface Props {
  padding?: boolean
  shadow?: boolean
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  padding: true,
  shadow: true,
  hover: false
})
</script>

<template>
  <div
    class="qb-card"
    :class="{
      'qb-card--padding': props.padding,
      'qb-card--shadow': props.shadow,
      'qb-card--hover': props.hover
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.qb-card {
  background: white;
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--border-color);
}

.qb-card--padding {
  padding: 20px;
}

.qb-card--shadow {
  box-shadow: var(--shadow-sm);
}

.qb-card--hover {
  transition: var(--transition-fast);
}

.qb-card--hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
</style>
