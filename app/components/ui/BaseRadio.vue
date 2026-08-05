<script setup lang="ts">
interface Props {
  modelValue: string | number
  value: string | number
  label?: string
  name: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const handleChange = () => {
  emit('update:modelValue', props.value)
}
</script>

<template>
  <label class="qb-radio">
    <input
      type="radio"
      :name="name"
      :checked="modelValue === value"
      :value="value"
      :disabled="disabled"
      @change="handleChange"
    />

    <span>{{ label }}</span>
  </label>
</template>

<style scoped>
.qb-radio {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.qb-radio input {
  width: 18px;
  height: 18px;
  accent-color: var(--primary);
}
</style>
