<script setup lang="ts">
import MainLayout from "./layouts/mainLayout.vue";
import {onMounted} from "vue";
import {applyTheme, getSavedTheme, getSystemTheme} from "./utils/theme.ts";

const systemTheme = getSystemTheme()

onMounted(() => {
  let savedTheme = getSavedTheme()
  if (!savedTheme) {
    localStorage.setItem('theme', systemTheme)
    applyTheme(systemTheme)
  } else {
    if (savedTheme !== "system") {
      applyTheme(savedTheme)
    } else {
      applyTheme(systemTheme)
    }
  }

})
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', (e) => {
  const newTheme = e.matches ? 'dark' : 'light'
  const savedTheme = getSavedTheme()
  if (savedTheme) {
    if (savedTheme === "system") {
      applyTheme(newTheme)
    } else {
      return;
    }
  } else {
    localStorage.setItem('theme', newTheme)
  }
})

</script>

<template>
  <mainLayout></mainLayout>
</template>

<style scoped>

</style>
