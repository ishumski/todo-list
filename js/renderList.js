import taskList from "./tasks.js"
import { rootDiv } from "./script.js";
import listTemplate from "../js/templates/pages/list/index.js"
import { getListIdByUrl } from "./utils.js";
import addTask from "./task-operation/add-tasks.js";
import deleteChackedTasks from "./task-operation/delete-checked-tasks.js"
import { createTask } from "./task-operation/add-tasks.js"

export function renderList() {
    rootDiv.innerHTML = listTemplate;

    //находим форму добавления
    const addForm = document.querySelector(".add-form > form");//находим форму добавления
    const deleteChackedBtn = document.querySelector(".delete-checked-btn");

    //вешаем обработчик события submit (отправки) на форму
    addForm.addEventListener("submit", addTask);
    deleteChackedBtn.addEventListener("click", deleteChackedTasks);

    const listId = getListIdByUrl();

    taskList.tasks
        .filter((task) => task.parentListId === listId)
        .forEach(task => {
            createTask(task);
        });
}