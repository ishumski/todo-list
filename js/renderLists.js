import { rootDiv } from "./script.js";
import listsList from "./lists-list.js"
import addList, { createList } from "./list-operations/add-list.js";
import listsTemplate from "../js/templates/pages/lists/index.js"

export function renderLists() {
    rootDiv.innerHTML = listsTemplate;
    const addListForm = document.querySelector(".add-form > form");
    addListForm.addEventListener("submit", addList);
    listsList.lists.forEach((list) => {
        createList(list);
    });

}