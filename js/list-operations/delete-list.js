// import storageService from '../storage-service.js';

// import { generateId } from '../utils.js';
// import listsList from '../lists-list.js';
// import { renderList } from '../renderList.js';
import listLists from '../lists-list.js';
import { generateId } from '../utils.js';
import addList from "./add-list.js";

function deleteList(event) {

    const { parentNode } = event.target.closest(".deleteList-btn");

    const listId = parseInt(parentNode.id.split("-")[1], 10);
    
    listsList.delete(listId);
    parentNode.remove();

    storageService.set("lists", JSON.stringify(listsList.lists));
   
}
export default deleteList;

 