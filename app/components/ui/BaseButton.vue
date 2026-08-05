<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  label?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  fullWidth: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const buttonClass = computed(() => [
  'qb-button',
  `qb-button--${props.variant}`,
  `qb-button--${props.size}`,
  {
    'qb-button--full': props.fullWidth,
    'qb-button--disabled': props.disabled,
    'qb-button--loading': props.loading
  }
])

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }

  emit('click', event)
}
</script>

<template>
  <button
    :type="type"
    :class="buttonClass"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span
      v-if="loading"
      class="qb-button__loader"
    />

    <slot name="leftIcon" />

    <span class="qb-button__label">
      <slot>
        {{ label }}
      </slot>
    </span>

    <slot name="rightIcon" />
  </button>
</template>

<style scoped>
.qb-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: none;
  border-radius: var(--border-radius-md);

  cursor: pointer;

  transition: var(--transition-normal);

  font-weight: 600;
}

.qb-button--sm {
  padding: 8px 16px;
  font-size: 14px;
}

.qb-button--md {
  padding: 12px 24px;
  font-size: 16px;
}

.qb-button--lg {
  padding: 16px 32px;
  font-size: 18px;
}

.qb-button--primary {
  background: var(--primary);
  color: white;
}

.qb-button--primary:hover {
  background: var(--primary-hover);
}

.qb-button--secondary {
  background: var(--secondary);
  color: white;
}

.qb-button--outline {
  background: white;
  border: 1px solid var(--primary);
  color: var(--primary);
}

.qb-button--danger {
  background: var(--danger);
  color: white;
}

.qb-button--disabled {
  opacity: .6;
  cursor: not-allowed;
}

.qb-button--full {
  width: 100%;
}

.qb-button__loader {
  width: 16px;
  height: 16px;

  border: 2px solid white;
  border-top-color: transparent;

  border-radius: 50%;

  animation: spin .8s linear infinite;
}

@keyframes spin {

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

}
</style>
