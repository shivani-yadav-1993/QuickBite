<script setup lang="ts">
interface Props {
  modelValue: string
  placeholder?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'Search...',
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleInput = (event: Event) => {
  emit(
    'update:modelValue',
    (event.target as HTMLInputElement).value
  )
}
</script>

<template>
  <div class="qb-search">
    <span class="qb-search__icon">🔍</span>

    <input
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
    />
  </div>
</template>

<style scoped>
.qb-search {
  display: flex;
  align-items: center;

  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);

  padding: 0 14px;

  background: white;
}

.qb-search input {
  flex: 1;

  border: none;
  outline: none;

  padding: 12px;

  background: transparent;
}

.qb-search__icon {
  font-size: 18px;
}
</style>
