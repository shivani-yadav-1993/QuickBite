<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: string | number
  label?: string
  placeholder?: string
  type?: string
  name?: string
  id?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  error?: string
  helperText?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  type: 'text',
  name: '',
  id: '',
  disabled: false,
  readonly: false,
  required: false,
  error: '',
  helperText: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'blur', event: FocusEvent): void
  (e: 'focus', event: FocusEvent): void
}>()

const inputClass = computed(() => [
  'qb-input',
  {
    'qb-input--error': !!props.error,
    'qb-input--disabled': props.disabled
  }
])

const onInput = (event: Event) => {
  emit(
    'update:modelValue',
    (event.target as HTMLInputElement).value
  )
}
</script>

<template>
  <div class="qb-input-wrapper">
    <label
      v-if="label"
      :for="id"
      class="qb-label"
    >
      {{ label }}

      <span
        v-if="required"
        class="required"
      >
        *
      </span>
    </label>

    <div class="qb-input-container">
      <slot name="prefix" />

      <input
        :id="id"
        :name="name"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :class="inputClass"
        @input="onInput"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
      />

      <slot name="suffix" />
    </div>

    <small
      v-if="helperText && !error"
      class="helper"
    >
      {{ helperText }}
    </small>

    <small
      v-if="error"
      class="error"
    >
      {{ error }}
    </small>
  </div>
</template>

<style scoped>
.qb-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.qb-label {
  font-weight: 600;
  color: var(--text-primary);
}

.required {
  color: var(--danger);
}

.qb-input-container {
  display: flex;
  align-items: center;
}

.qb-input {
  width: 100%;

  padding: 12px 16px;

  border: 1px solid var(--border-color);

  border-radius: var(--border-radius-md);

  transition: var(--transition-fast);

  outline: none;
}

.qb-input:focus {
  border-color: var(--primary);
}

.qb-input--error {
  border-color: var(--danger);
}

.qb-input--disabled {
  background: #f3f3f3;
  cursor: not-allowed;
}

.helper {
  color: var(--text-secondary);
}

.error {
  color: var(--danger);
}
</style>
