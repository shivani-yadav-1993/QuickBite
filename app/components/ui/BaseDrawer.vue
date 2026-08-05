<script setup lang="ts">
interface Props {
  modelValue: boolean
  title?: string
  position?: 'left' | 'right'
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: '',
  position: 'right',
  width: '400px'
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
      class="qb-drawer-overlay"
      @click.self="close"
    >
      <aside
        class="qb-drawer"
        :class="`qb-drawer--${position}`"
        :style="{ width }"
      >
        <header class="qb-drawer__header">
          <h3>{{ title }}</h3>

          <button @click="close">
            ✕
          </button>
        </header>

        <section class="qb-drawer__body">
          <slot />
        </section>
      </aside>
    </div>
  </Teleport>
</template>

<style scoped>
.qb-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.4);
  z-index: 999;
}

.qb-drawer {
  position: absolute;
  top: 0;
  bottom: 0;

  background: white;

  display: flex;
  flex-direction: column;

  box-shadow: var(--shadow-lg);
}

.qb-drawer--right {
  right: 0;
}

.qb-drawer--left {
  left: 0;
}

.qb-drawer__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  border-bottom: 1px solid var(--border-color);
}

.qb-drawer__header button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

.qb-drawer__body {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}
</style>
