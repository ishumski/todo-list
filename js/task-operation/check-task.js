function checkTask(event) {
    const { target } = event;
    const { parentNode: li, checked } = target;//деструктуризация! заменяет следуюшие строчки: const li = target.parentNode; const checked = target.checked;

    if (checked) {
        li.classList.add("checked");
    } else {
        li.classList.remove("checked");
    }
};
export default checkTask;