<script setup lang="ts">
interface Tab {
  label: string
  value: string
}

interface Props {
  tabs: Tab[]
  modelValue: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="qb-tabs">

    <button
      v-for="tab in tabs"
      :key="tab.value"
      class="qb-tab"
      :class="{
        'qb-tab--active': modelValue === tab.value
      }"
      @click="emit('update:modelValue', tab.value)"
    >
      {{ tab.label }}
    </button>

  </div>
</template>

<style scoped>
.qb-tabs {
  display: flex;
  gap: 12px;
}

.qb-tab {
  padding: 10px 20px;

  border: none;

  background: #efefef;

  border-radius: var(--border-radius-md);

  cursor: pointer;

  transition: var(--transition-fast);
}

.qb-tab--active {
  background: var(--primary);
  color: white;
}
</style>
