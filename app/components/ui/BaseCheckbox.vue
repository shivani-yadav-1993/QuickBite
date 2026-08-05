<script setup lang="ts">
interface Props {
  modelValue: boolean
  label?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  label: '',
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const handleChange = (event: Event) => {
  emit(
    'update:modelValue',
    (event.target as HTMLInputElement).checked
  )
}
</script>

<template>
  <label class="qb-checkbox">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="handleChange"
    />

    <span>{{ label }}</span>
  </label>
</template>

<style scoped>
.qb-checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.qb-checkbox input {
  width: 18px;
  height: 18px;
  accent-color: var(--primary);
}
</style>
