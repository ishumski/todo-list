import taskList from "../tasks.js";
import { getTaskId } from "../utils.js";
import storageService from "../storage-service.js"

function deleteChackedTasks() {
    const checkedTasks = document.querySelectorAll("li.checked");

    checkedTasks.forEach((checkedTask) => {

        const taskId = getTaskId(checkedTasks);
        taskList.delete(taskId);

        checkedTask.remove();
    });

    storageService.set("tasks", JSON.stringify(taskList.tasks));
}
export default deleteChackedTasks;