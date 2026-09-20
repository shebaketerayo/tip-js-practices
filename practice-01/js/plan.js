"use strict";

const totalTasks = 18;
const completedTasks = 6;
const dailyLimit = 5;

if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
  console.log("Ошибка: количество задач должно быть целым числом");
} else if (totalTasks < 0 || completedTasks < 0) {
  console.log("Ошибка: количество задач не может быть отрицательным");
} else if (totalTasks > 1000) {
  console.log("Ошибка: задач не может быть больше 1000");
} else if (completedTasks > totalTasks) {
  console.log("Ошибка: выполнено больше задач, чем есть всего");
} else if (!Number.isInteger(dailyLimit)) {
  console.log("Ошибка: дневная норма должна быть целым числом");
} else if (dailyLimit < 1 || dailyLimit > 1000) {
  console.log("Ошибка: дневная норма должна быть от 1 до 1000");
} else {
  let remainingTasks = totalTasks - completedTasks;

  console.log(`Осталось задач: ${remainingTasks}`);

  if (remainingTasks === 0) {
    console.log("Все задачи уже выполнены");
    console.log("Потребуется дней: 0");
  } else {
    let day = 0;

    while (remainingTasks > 0) {
      day += 1;
      const dayTasks = Math.min(dailyLimit, remainingTasks);
      remainingTasks -= dayTasks;
      console.log(`День ${day}: выполнено ${dayTasks}, осталось ${remainingTasks}`);
    }

    console.log(`Потребуется дней: ${day}`);
  }
}
