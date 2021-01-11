function deleteChackedTasks(){
const checkedTasks = document.querySelectorAll("li.checked");
checkedTasks.forEach(checkedTask =>{
    checkedTask.remove();
})
}
export default deleteChackedTasks;