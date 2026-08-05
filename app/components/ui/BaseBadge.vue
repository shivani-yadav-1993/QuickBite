<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'success' | 'warning' | 'danger'
}

const props = withDefaults(
  defineProps<Props>(),
  {
    variant: 'primary'
  }
)

const badgeClass = computed(() => [
  'qb-badge',
  `qb-badge--${props.variant}`
])
</script>

<template>
  <span :class="badgeClass">
    <slot />
  </span>
</template>

<style scoped>
.qb-badge {
  display: inline-flex;
  align-items: center;

  padding: 4px 10px;

  border-radius: 999px;

  font-size: 12px;
  font-weight: 600;
}

.qb-badge--primary {
  background: var(--primary);
  color: white;
}

.qb-badge--success {
  background: var(--success);
  color: white;
}

.qb-badge--warning {
  background: var(--warning);
  color: white;
}

.qb-badge--danger {
  background: var(--danger);
  color: white;
}
</style>
