<template>
  <div class="flex flex-col h-full">
    <h1 class="text-4xl">Home</h1>
    <hr class="mt-3" />

    <div class="flex justify-center items-center h-full">
      <div
        class="flex relative w-sm aspect-square rounded-full overflow-hidden border-4 border-teal-500"
        :class="{ 'cursor-pointer': goalCompleted }"
        style="clip-path: circle(50% at 50% 50%)"
        @click="handleClickInput"
      >
        <Transition name="fade-zoom" appear>
          <h1
            v-if="goalCompleted"
            class="absolute select-none text-shadow-lg w-full justify-center text-[6em] self-center text-center z-10 text-neutral-200"
          >
            Goal!
          </h1>
        </Transition>
        <h1
          v-show="!goalCompleted"
          class="absolute select-none text-shadow-lg w-full justify-center text-[6em] self-center text-center z-10 text-neutral-200 transition-all ease-in-out duration-500 opacity-100"
        >
          {{ Math.floor(tracker) }}%
        </h1>
        <div
          class="absolute inset-0 origin-bottom bg-teal-400 transition-transform duration-1000 ease-in-out"
          :style="{
            transform: `scaleY(${tracker / goalTracker})`,
          }"
        ></div>
      </div>
    </div>
    <input
      type="range"
      min="0"
      max="100"
      v-model.number="tracker"
      class="mt-4 w-40"
      @input="handleRangeInput"
    />
  </div>
</template>

<script setup lang="ts">
import {
  checkCompleted,
  clickGoal,
  createGoal,
  updateTracker,
} from "../utils/goal";
import type { Goal } from "../utils/goal";
import { onMounted, ref } from "vue";
import { updateGoal } from "../utils/localStorage";

let tracker = ref(100);
let goalCompleted = ref(false);
let goalTracker = 100;
let goal: Goal;

onMounted(() => {
  goal = updateGoal();
  console.log(goal.existsGoal);
  
  if (goal.existsGoal === null) {
    createGoal();
  } else {
    if (goal.existsGoal === true) {
      tracker.value = 100;
      console.log("eh2");
      
    } else {
      console.log("eh");
      
      tracker.value = goal.tracker*(1/goal.goalTracker);
    }
  }
  checkCompleted(goal.tracker, goalCompleted);
});

const handleRangeInput = () => {
  checkCompleted(tracker.value, goalCompleted);
  updateTracker(tracker.value);
};

const handleClickInput = () => {
  goal = updateGoal();
  if (goalCompleted) {
    clickGoal(goal.existsGoal, tracker.value);
    tracker.value = 0;
    goalCompleted.value = false;
  } else null;
  checkCompleted(tracker.value, goalCompleted);
};
</script>

<style scoped>
.fade-zoom-enter-from {
  opacity: 0;
  transform: scale(0.1);
}

.fade-zoom-enter-active {
  transition: opacity 0.9s ease, transform 0.8s ease;
}

.fade-zoom-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
