<script setup lang="ts">
interface Props {
  modelValue: string
  label?: string
  placeholder?: string
  rows?: number
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
  rows: 4,
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

const handleInput = (event: Event) => {
  emit(
    'update:modelValue',
    (event.target as HTMLTextAreaElement).value
  )
}
</script>

<template>
  <div class="qb-textarea-wrapper">
    <label
      v-if="label"
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

    <textarea
      :value="modelValue"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      class="qb-textarea"
      :class="{ 'qb-textarea--error': error }"
      @input="handleInput"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />

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
.qb-textarea-wrapper {
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

.qb-textarea {
  width: 100%;
  padding: 12px 16px;
  resize: vertical;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  outline: none;
  transition: var(--transition-fast);
}

.qb-textarea:focus {
  border-color: var(--primary);
}

.qb-textarea--error {
  border-color: var(--danger);
}

.helper {
  color: var(--text-secondary);
}

.error {
  color: var(--danger);
}
</style>
