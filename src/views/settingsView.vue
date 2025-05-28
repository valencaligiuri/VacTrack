<template>
  <h1 class="text-4xl">Settings</h1>
  <hr class="mt-3">
  <div class="container-settings mt-6 px-4">
    <ul>
      <li class="flex justify-between">
        <label for="theme" class="text-xl font-medium">Theme</label>
        <select id="theme"
                class="bg-neutral-100 border border-neutral-300 px-4 rounded-sm focus:outline-none focus:ring-1 dark:bg-neutral-800
dark:border-neutral-700"
                v-model="theme"
                @change="toggleTheme"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {applyTheme, getSystemTheme} from "../utils/theme.ts";

const theme = ref()
const systemTheme = getSystemTheme()
onMounted(() => {
  let savedTheme = localStorage.getItem('theme')
  if (!savedTheme) {
    theme.value = "system"
  } else {
    theme.value = savedTheme
    if (theme.value !== "system") {
      applyTheme(savedTheme)
    } else {
      applyTheme(systemTheme)
    }
  }

})

let toggleTheme = () => {
  applyTheme(theme.value)
  localStorage.setItem('theme', theme.value)
}

</script>

<style scoped>

</style>