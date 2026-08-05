<script setup lang="ts">
interface SelectOption {
  label: string
  value: string | number
}

interface Props {
  modelValue: string | number
  label?: string
  placeholder?: string
  options: SelectOption[]
  disabled?: boolean
  required?: boolean
  error?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  placeholder: 'Select',
  disabled: false,
  required: false,
  error: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleChange = (event: Event) => {
  emit(
    'update:modelValue',
    (event.target as HTMLSelectElement).value
  )
}
</script>

<template>
  <div class="qb-select-wrapper">
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

    <select
      class="qb-select"
      :class="{ 'qb-select--error': error }"
      :value="modelValue"
      :disabled="disabled"
      @change="handleChange"
    >
      <option
        disabled
        value=""
      >
        {{ placeholder }}
      </option>

      <option
        v-for="option in props.options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>

    <small
      v-if="error"
      class="error"
    >
      {{ error }}
    </small>
  </div>
</template>

<style scoped>
.qb-select-wrapper {
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

.qb-select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  outline: none;
  transition: var(--transition-fast);
}

.qb-select:focus {
  border-color: var(--primary);
}

.qb-select--error {
  border-color: var(--danger);
}

.error {
  color: var(--danger);
}
</style>
