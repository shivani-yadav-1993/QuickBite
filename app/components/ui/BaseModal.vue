<script setup lang="ts">
interface Props {
  modelValue: boolean
  title?: string
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const close = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="qb-modal-overlay"
      @click.self="close"
    >
      <div class="qb-modal">

        <div class="qb-modal__header">

          <h3>{{ title }}</h3>

          <button @click="close">
            ✕
          </button>

        </div>

        <div class="qb-modal__body">
          <slot />
        </div>

        <div class="qb-modal__footer">
          <slot name="footer" />
        </div>

      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.qb-modal-overlay {
  position: fixed;
  inset: 0;

  background: rgba(0,0,0,.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
}

.qb-modal {
  width: 500px;
  max-width: 95%;

  background: white;

  border-radius: var(--border-radius-lg);

  box-shadow: var(--shadow-lg);

  overflow: hidden;
}

.qb-modal__header,
.qb-modal__footer {
  padding: 16px 20px;

  display: flex;

  justify-content: space-between;

  align-items: center;

  border-bottom: 1px solid var(--border-color);
}

.qb-modal__body {
  padding: 20px;
}

.qb-modal__header button {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
}
</style>
