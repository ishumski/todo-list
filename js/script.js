// import taskList from "./tasks.js"
// import listsList from "./lists-list.js"

// import listsTemplate from "../js/templates/pages/lists/index.js"
// import addList, { createList } from "./list-operations/add-list.js";
// import listTemplate from "../js/templates/pages/list/index.js"
// import { getListIdByUrl } from "./utils.js";
// import addTask from "./task-operation/add-tasks.js";
// import deleteChackedTasks from "./task-operation/delete-checked-tasks.js"
// import { createTask } from "./task-operation/add-tasks.js"
import { renderList } from "./renderList.js";
import { renderLists } from "./renderLists.js";

const currentUrl = window.location.pathname;
export const rootDiv = document.querySelector(".container");

if (currentUrl === "/") {
    renderLists();
}

if (currentUrl === "/list/1") {
    renderList();
}


//для работы кликов кнопов в браузере "вперед" "назад"
window.addEventListener("popstate", () => {
    if (window.location.pathname === "/list/1") {
        renderList();
    }
    if (window.location.pathname === "/") {
        renderLists();
    }
});
