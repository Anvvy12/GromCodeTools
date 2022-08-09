import renderTasks from "./renderTask";
import { setItem } from "./storage"; // getItem,
import { createTasks, getTasksList } from "./tasksGateWay";

export default () => {
  const inputVal = document.querySelector(".task-input").value;
  if (inputVal === "") {
    return;
  }

  inputVal.value = "";
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
