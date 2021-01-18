import storageService from "../storage-service.js";
import checkTask from "../task-operation/check-task.js";
import deleteTask from "../task-operation/delete-task.js";
import editTask from "../task-operation/edit-task.js";
import taskList from "../tasks.js";

const todoList = document.querySelector(".todo-list ol");



function genereteId(tasks) {

    //получаем массив со всеми id  еtask
    const ids = tasks.map(task => {
        return task.id;
    });


    //если пустой массив, то начинаем id с 1
    if (!ids.length) {
        return 1;
    }

    // назодим максимальный id 
    const maxId = Math.max(...ids);

    //возвращаем новый, которы болььше максимального на 1
    return maxId + 1;

}

export function createTask(task) {
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
        id: genereteId(taskList.tasks),
        text: todoText,
        checked: false,
    };

    taskList.add(newTask);

    createTask(newTask);

    event.target.reset();//возвразает форму в ее исходное положение

    storageService.set("tasks", JSON.stringify(taskList.tasks));
};

