import type { Ref } from "vue";

export const checkCompleted = (
  tracker: number,
  goalCompleted: Ref<boolean>
) => {
  if (tracker >= 100) {
    goalCompleted.value = true;
  } else {
    goalCompleted.value = false;
  }
};

export const createGoal = () => {
  let goalName = "";
  let goalTracker = 0;
  localStorage.setItem("goal", "false");
  localStorage.setItem("tracker", "0");
  localStorage.setItem("goalName", "");
  while (goalName === "") {
    goalName = prompt("Insert GOAL name") || "";
  }
  localStorage.setItem("goalName", goalName);
  while (goalTracker <= 0) {
    goalTracker = parseInt(prompt("Insert $ GOAL") || "0");
  }
  localStorage.setItem("goalTracker", goalTracker.toString());
};

export const clickGoal = (goal: boolean, tracker: number) => {
  if (goal) {
    if (Math.floor(tracker) >= 100) {
      alert("Congrats!");
      createGoal();
    } else {
      createGoal();
    }
  }
};

export type Goal = {
  existsGoal: boolean;
  goalName: string;
  tracker: number; // o el tipo correcto
  goalTracker: number; // o el tipo correcto
};

export function updateTracker(tracker: number) {
  localStorage.setItem("tracker", tracker.toString());
}
