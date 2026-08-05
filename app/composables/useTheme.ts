import { storeToRefs } from 'pinia'

import { useThemeStore } from '~stores/theme.store'

export const useTheme = () => {
  const themeStore = useThemeStore()

  const { theme } = storeToRefs(themeStore)

  return {
    theme,

    toggleTheme: themeStore.toggleTheme
  }
}
