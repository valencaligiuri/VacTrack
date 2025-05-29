<script setup lang="ts">
import NavBar from "../components/navBar.vue";
</script>

<template>
  <div class="size-full bg-neutral-200 dark:bg-neutral-900">
    <div class="container-view size-full p-4 text-neutral-800 dark:text-neutral-200">
      <router-view></router-view>
    </div>
    <navBar></navBar>
  </div>
</template>

<style scoped></style>
