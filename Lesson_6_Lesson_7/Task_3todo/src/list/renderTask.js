import { getItem } from './storage';
import '../styles.css';

const listElem = document.querySelector('.list');

// eslint-disable-next-line consistent-return
const compareTasks = (a, b) => {
  if (a.done !== b.done) {
    return a.done - b.done;
  }
};

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list-item__checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');
  const checkboxElem = createCheckbox({ done, id });
  if (done) {
    listItemElem.classList.add('list-item_done');
  }

  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');

  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};

export default () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
};
