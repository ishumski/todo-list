// import storageService from '../storage-service.js';

// import { generateId } from '../utils.js';
// import listsList from '../lists-list.js';
// import { renderList } from '../renderList.js';
import { generateId } from '../utils.js';
import addList from "./add-list.js";
const deleteListBtn = document.querySelectorAll(".deleteList-btn");
function deleteList(event) {

    const { parentNode } = deleteListBtn;
    console.log(deleteListBtn);

    const listId = parseInt(parentNode.id.split("-")[1], 10);
    
    newList.delete(listId);
    parentNode.remove();
   
}
deleteList();
console.log("parentNode");
export default deleteList;

 