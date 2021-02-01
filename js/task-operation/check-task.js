import storageService from "../storage-service.js";
import taskList from "../tasks.js"
import {getId} from "../utils.js"

function checkTask(event) {
    const { target } = event;
    const { parentNode: li, checked } = target;//деструктуризация! заменяет следуюшие строчки: const li = target.parentNode; const checked = target.checked;

    if (checked) {
        li.classList.add("checked");
    } else {
        li.classList.remove("checked");
    }
    const taskId = getId(li);
    taskList.check(taskId);
    storageService.set("tasks", JSON.stringify(taskList.tasks));
};
export default checkTask;