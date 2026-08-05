import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const loading = ref(false)

  const sidebarOpen = ref(false)

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  return {
    loading,
    sidebarOpen,
    setLoading,
    toggleSidebar
  }
})
