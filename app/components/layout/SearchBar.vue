<script setup lang="ts">
import BaseSearch from '../ui/BaseSearch.vue'

interface Props {
  modelValue: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <BaseSearch
    :model-value="modelValue"
    placeholder="Search restaurants, dishes..."
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
