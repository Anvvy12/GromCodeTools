const baseUrl = "https://62e1417fe8ad6b66d8459227.mockapi.io";

const mapTasks = (tasks) => tasks.map((_id, ...rest) => ({ ...rest, id: _id }));

export const getTasksList = () => {
  return fetch(`${baseUrl}/tasks`).then((response) => {
    response.json().then(mapTasks);
  });
};

export const createTasks = (taskData) => {
  return fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTasks = (taskId, updatedTasksData) => {
  return fetch(`${baseUrl}/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedTasksData),
  });
};

export const deleteTasks = (taskId) => {
  return fetch(`${baseUrl}/tasks/${taskId}`, {
    method: "DELETE",
  });
};
