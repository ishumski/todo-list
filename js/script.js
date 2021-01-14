
import addTask from "./task-operation/add-tasks.js";
import deleteChackedTasks from "./task-operation/delete-checked-tasks.js";

//находим форму добавления
const deleteChackedBtn = document.querySelector(".delete-checked-btn");
const addForm = document.querySelector(".add-form > form");//находим форму добавления

//вешаем обработчик события submit (отправки) на форму
addForm.addEventListener("submit", addTask);
deleteChackedBtn.addEventListener("click", deleteChackedTasks);
