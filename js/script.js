
import addTask from "./task-operation/add-tasks.js";
import deleteChackedTasks from "./task-operation/delete-checked-tasks.js";

const deleteChackedBtn = document.querySelector(".delete-checked-btn");
const addForm = document.querySelector(".add-form > form");//находим форму добавления

addForm.addEventListener("submit", addTask);
deleteChackedBtn.addEventListener("click", deleteChackedTasks);
