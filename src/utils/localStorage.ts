import type { Goal } from "./goal";

export function getOrPromptAndStore(key: string, message: string): string{
  let value = localStorage.getItem(key);

  if (value === null) {
    const input = prompt(message);

    if (!input || isNaN(parseInt(input))) {
      throw new Error(`Valor inválido para ${key}`);
    }

    value = input;
    localStorage.setItem(key, value);
  }

  return (value);
}


export function updateGoal(): Goal {
  let goal: Goal;

  goal = {
    existsGoal: Boolean(localStorage.getItem("goal")),
    goalName: getOrPromptAndStore("goalName", "Insert GOAL name"),
    tracker: parseInt(getOrPromptAndStore("tracker", "Insert $ progress")),
    goalTracker: parseInt(getOrPromptAndStore("goalTracker", "Insert GOAL")),
  };
  return goal;
}