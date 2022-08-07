import { renderTasks } from "./renderTask.js";
import { getItem, setItem } from "./storage.js";
import { updateTasks, getTasksList } from "./tasksGateWay.js";

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list-item__checkbox");

  if (!isCheckbox) {
    return;
  }
  const tasksList = getItem("tasksList");
  const taskId = e.target.dataset.id;

  const done = e.target.checked;
  const { text } = tasksList.find((task) => task.id) === taskId;

  const updatedTask = {
    text,
    done,
  };

  updateTasks(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};

// 1. prepare data
// 2. update data to data base
// 3. read new data from server
// 4. save new data to front storage
// 5. update UI dased on new data
