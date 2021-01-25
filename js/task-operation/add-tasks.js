import editTask from "../task-operation/edit-task.js";
import checkTask from "../task-operation/check-task.js";
import deleteTask from "../task-operation/delete-task.js";

import taskList from "../tasks.js";
import storageService from "../storage-service.js";

import { generateId, getListIdByUrl } from "../utils.js"

export function createTask(task) {
    const todoList = document.querySelector(".todo-list ol");

    const newTodo = document.createElement("li");

    newTodo.setAttribute("id", `task-${task.id}`);

    todoList.appendChild(newTodo);

    newTodo.innerHTML = `
    <input type="checkbox">
    <span>${task.text}</span>
    <button class="edit-btn"><i class="fa fa-edit"></i></button>
    <button class="delete-btn"><i class="fa fa-trash-alt"></i></button>
    `;

    const checkbox = document.querySelector(`#task-${task.id} > input`);
    const deleteBtn = document.querySelector(`#task-${task.id} .delete-btn`);
    const editBtn = document.querySelector(`#task-${task.id} .edit-btn`);

    checkbox.addEventListener("change", checkTask);
    deleteBtn.addEventListener("click", deleteTask);
    editBtn.addEventListener("click", editTask);

    if (task.checked) {
        newTodo.classList.add("checked");
        checkbox.checked = "checked";
    }
}

export default function addTask(event) {

    //вешаем обработчик события при нажатии на кнопку(отправка) данных
    event.preventDefault();//сброс стандартного поведения формы
    const formData = new FormData(event.target);//получаем все поля формы
    const todoText = formData.get("text");//получаем текст из инпута

    if (!todoText) {
        return;
    }

    const newTask = {//слзд обхект 
        id: generateId(taskList.tasks),
        parentListId: getListIdByUrl(),
        text: todoText,
        checked: false,

    };

    taskList.add(newTask);

    createTask(newTask);

    event.target.reset();//возвразает форму в ее исходное положение

    storageService.set("tasks", JSON.stringify(taskList.tasks));
};

