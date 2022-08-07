import { initTodoListHandlers } from "./list/todoList.js";
import { renderTasks } from "./list/renderTask.js";
import { getTasksList } from "./list/tasksGateWay.js";
import { setItem } from "./list/storage.js";
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
