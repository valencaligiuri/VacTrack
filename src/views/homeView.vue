<template>
  <div class="flex flex-col h-full">
    <h1 class="text-4xl">Home</h1>
    <hr class="mt-3" />

    <div class="flex justify-center items-center h-full">
      <div
        class="flex relative w-sm aspect-square rounded-full overflow-hidden border-4 border-teal-500"
        :class="{ 'cursor-pointer': goalCompleted }"
        style="clip-path: circle(50% at 50% 50%)"
        @click="goalCompleted ? console.log('si'): null"
      >
        <Transition name="fade-zoom" appear>
          <h1
            v-if="goalCompleted"
            class="absolute text-shadow-lg w-full justify-center text-[6em] self-center text-center z-10 text-neutral-200"
          >
            Goal!
          </h1>
        </Transition>
        <div
          class="absolute inset-0 origin-bottom bg-teal-400 transition-transform duration-1000 ease-in-out"
          :style="{
            transform: `scaleY(${goalTracker / 100})`,
          }"
        ></div>
      </div>
    </div>
    <input
      type="range"
      min="0"
      max="100"
      v-model.number="goalTracker"
      class="mt-4 w-40"
      @input="handleRangeInput"
    />
  </div>
</template>

<script setup lang="ts">
import { checkCompleted } from "../utils/goal";
import { ref } from "vue";

const goalTracker = ref(0);
const goalCompleted = ref(false);

const handleRangeInput = () => {
  checkCompleted(goalTracker.value, goalCompleted);
};
</script>

<style scoped>
.fade-zoom-enter-from,
.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.1);
}

.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: opacity 0.9s ease, transform 0.8s ease;
}

.fade-zoom-enter-to,
.fade-zoom-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
