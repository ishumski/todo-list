import listTemplate from "../js/templates/pages/list/index.js"

import addTask from "./task-operation/add-tasks.js"
import deleteChackedTasks from "./task-operation/delete-checked-tasks.js"
import taskList from "./tasks.js"
import renderTasks from "./render-tasks.js";
import { getId } from "./utils.js"


const rootDiv = document.querySelector('.container');

export default function renderList() {
    rootDiv.innerHTML = listTemplate;

    //находим форму добавления
    const addForm = document.querySelector(".add-form > form");//находим форму добавления
    const deleteChackedBtn = document.querySelector(".delete-checked-btn");

    //вешаем обработчик события submit (отправки) на форму
    addForm.addEventListener("submit", addTask);
    deleteChackedBtn.addEventListener("click", deleteChackedTasks);

    renderTasks();
}

export default function addDragAndDrop() {
    const listItems = document.querySelectorAll("li");

    let dragging;
    let draggingOver;

    listItems.forEach(listItem => {
        listItem.setAttribute("draggable", true);

        listItem.addEventListener("drag", (event) => {
            dragging = event.target;
        })

        listItem.addEventListener("dragover", (event) => {
            event.preventDefault();
            draggingOver = event.target.closest("li");
        })

        listItem.addEventListener("drop", () => {
            taskList.swap(getId(dragging), getId(draggingOver));

            renderTasks();
        })
    });
}

