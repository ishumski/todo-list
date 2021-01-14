import checkTask from "../task-operation/check-task.js";
import deleteTask from "../task-operation/delete-task.js";
import editTask from "../task-operation/edit-task.js";

const todoList = document.querySelector(".todo-list ol");

let tasks = [];//хранятся все наши дела
export default function addTask(event) {

    //вешаем обработчик события при нажатии на кнопку(отправка) данных
    event.preventDefault();//сброс стандартного поведения формы
    const formData = new FormData(event.target);//получаем все поля формы
    const todoText = formData.get("text");//получаем текст из инпута

    if (!todoText) {
        return;
    }

    const newTask = {//слзд обхект 
        text: todoText,
        checked: false,
    };

    tasks = [...tasks, newTask];//

    const newTodo = document.createElement("li");

    newTodo.setAttribute("id", `task-${tasks.length}`);

    todoList.appendChild(newTodo);

    newTodo.innerHTML = `
    <input type="checkbox">
    <span>${todoText}</span><button class="edit-btn"><i class="fa fa-edit"></i></button><button class="delete-btn"><i class="fa fa-trash-alt"></i></button>
    
    `;

    const checkbox = document.querySelector(`#task-${tasks.length} > input`);
    const deleteBtn = document.querySelector(`#task-${tasks.length} .delete-btn`);
    const editBtn = document.querySelector(`#task-${tasks.length} .edit-btn`);

    checkbox.addEventListener("change", checkTask);
    deleteBtn.addEventListener("click", deleteTask);
    editBtn.addEventListener("click", editTask);

    event.target.reset();//возвразает форму в ее исходное положение
};