import { renderTasks } from "./renderTask.js";
import { getItem, setItem } from "./storage.js";
import { createTasks, getTasksList } from "./tasksGateWay.js";

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }

  taskTitleInputElem.value = "";

  const newTask = {
    text,
    done: false,
  };

  createTasks(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

// 1. prepare data
// 2. write data to data base
// 3. read new data from server
// 4. save new data to front storage
// 5. update UI dased on new data
