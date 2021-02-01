import storageService from '../storage-service.js';
import { generateId } from '../utils.js';
import listsList from '../lists-list.js';
import { navigateToUrl } from "../routing.js";
import currentUser from '../current-user.js';

export function createList(list) {
  const lists = document.querySelector('.lists ol');

  const newList = document.createElement('li');

  newList.setAttribute('id', `list-${list.id}`);


  lists.appendChild(newList);

  newList.innerHTML = `
  <a href="#">${list.name}</a>
  <button class="editList-btn"><i class="fa fa-edit"></i></button>
  <button class="deleteList-btn"><i class="fa fa-trash-alt"></i></button>
  `;

  const linkToList = newList.querySelector('a');

  linkToList.addEventListener('click', (event) => {
    event.preventDefault();

    navigateToUrl(`/list/${list.id}`);
  });
}

export default function addList(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const listName = formData.get('name');

  const newList = {
    id: generateId(listsList.lists),
    userId: currentUser.userData.id,
    name: listName,
  };

  listsList.add(newList);

  createList(newList);

  event.target.reset();

  storageService.set('lists', JSON.stringify(listsList.lists));
}


