import "core-js/modules/es.promise.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const baseUrl = "https://62e1417fe8ad6b66d8459227.mockapi.io";

const mapTasks = tasks => tasks.map(function (_id) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return _objectSpread(_objectSpread({}, rest), {}, {
    id: _id
  });
});

export const getTasksList = () => {
  return fetch("".concat(baseUrl, "/tasks")).then(response => {
    response.json().then(mapTasks);
  });
};
export const createTasks = taskData => {
  return fetch("".concat(baseUrl, "/tasks"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(taskData)
  });
};
export const updateTasks = (taskId, updatedTasksData) => {
  return fetch("".concat(baseUrl, "/tasks/").concat(taskId), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(updatedTasksData)
  });
};
export const deleteTasks = taskId => {
  return fetch("".concat(baseUrl, "/tasks/").concat(taskId), {
    method: "DELETE"
  });
};