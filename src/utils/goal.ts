import type { Ref } from "vue";

export const checkCompleted = (goal: Number, goalCompleted: Ref<boolean>) => {
  if (goal === 100) {
    goalCompleted.value = true;
  } else {
    goalCompleted.value = false;
  }
};
