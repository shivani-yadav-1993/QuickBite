<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

interface Props {
  items: BreadcrumbItem[]
}

defineProps<Props>()
</script>

<template>
  <nav class="qb-breadcrumb">
    <template
      v-for="(item, index) in items"
      :key="index"
    >
      <NuxtLink
        v-if="item.to"
        :to="item.to"
        class="qb-breadcrumb__link"
      >
        {{ item.label }}
      </NuxtLink>

      <span
        v-else
        class="qb-breadcrumb__current"
      >
        {{ item.label }}
      </span>

      <span
        v-if="index < items.length - 1"
        class="qb-breadcrumb__separator"
      >
        /
      </span>
    </template>
  </nav>
</template>

<style scoped>
.qb-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 14px;
}

.qb-breadcrumb__link {
  color: var(--primary);
}

.qb-breadcrumb__current {
  color: var(--text-secondary);
}

.qb-breadcrumb__separator {
  color: var(--text-secondary);
}
</style>
