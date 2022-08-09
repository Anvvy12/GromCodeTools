// 1. type of events (top 5)
// 2. add events (wich event type $ on wich element)
// 3. handlers

import initTodoListHandlers from "./list/todoList";
import renderTasks from "./list/renderTask";
import { getTasksList } from "./list/tasksGateWay";
import { setItem } from "./list/storage";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((tasksList) => {
    setItem("tasksList", tasksList);
    renderTasks();
  });

  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === "tasksList") renderTasks();
};

window.addEventListener("storage", onStorageChange);

// 1 get data from server
// 2 save data to front stogare
//
