<script setup lang="ts">
interface Props {
  page: number
  totalPages: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'change', page: number): void
}>()

const previous = () => {
  if (props.page > 1) {
    emit('change', props.page - 1)
  }
}

const next = () => {
  if (props.page < props.totalPages) {
    emit('change', props.page + 1)
  }
}
</script>

<template>
  <div class="qb-pagination">

    <button
      :disabled="page === 1"
      @click="previous"
    >
      Previous
    </button>

    <span>
      {{ page }} / {{ totalPages }}
    </span>

    <button
      :disabled="page === totalPages"
      @click="next"
    >
      Next
    </button>

  </div>
</template>

<style scoped>
.qb-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.qb-pagination button {
  padding: 10px 18px;

  border: none;

  border-radius: var(--border-radius-md);

  background: var(--primary);

  color: white;
}

.qb-pagination button:disabled {
  opacity: .5;
}
</style>
