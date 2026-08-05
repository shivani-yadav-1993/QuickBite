<script setup lang="ts">
interface Props {
  show: boolean
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
}

const props = withDefaults(
  defineProps<Props>(),
  {
    type: 'success'
  }
)
</script>

<template>
  <Transition name="toast">
    <div
      v-if="props.show"
      class="qb-toast"
      :class="`qb-toast--${props.type}`"
    >
      {{ props.message }}
    </div>
  </Transition>
</template>

<style scoped>
.qb-toast {
  position: fixed;

  top: 24px;
  right: 24px;

  padding: 14px 18px;

  border-radius: var(--border-radius-md);

  color: white;

  z-index: 1000;

  box-shadow: var(--shadow-md);
}

.qb-toast--success {
  background: var(--success);
}

.qb-toast--error {
  background: var(--danger);
}

.qb-toast--warning {
  background: var(--warning);
}

.qb-toast--info {
  background: var(--secondary);
}

.toast-enter-active,
.toast-leave-active {
  transition: all .3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
