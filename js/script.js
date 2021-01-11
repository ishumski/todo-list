
import addTask from "./task-operation/add-tasks.js";

const addForm = document.querySelector(".add-form > form");//находим форму добавления

addForm.addEventListener("submit", addTask);

