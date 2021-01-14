import{ENTER_KEY_CODE} from "../constance.js"

function submitTask(event) {
    if (event.keyCode !== ENTER_KEY_CODE) {
        return;
    }
    const li = event.target.closest("li");

    const icon = li.querySelector(".edit-btn i");

    const checkbox = li.querySelector('input[type="checkbox"]');

    saveTask(li, icon, checkbox);
}

function saveTask(li, icon, checkbox) {
    const input = li.querySelector('input[type="text"]');
    const { value: newText } = input;

    const newSpan = document.createElement("span");
    newSpan.textContent = newText;

    li.replaceChild(newSpan, input);

    icon.classList.remove("fa-save");
    icon.classList.add("fa-edit");

    checkbox.disable = false;
}

function editTask(event) {
    /*
    находим span текущего task
    записываем его содержимое в переменную
    создаем текстовый input и вставляем его вместо span
    задаем value инпута сохраненным значением span
    после повторного нажатия на кнопку edit, сохраняем текущее значение инпута
    заменяем инпут на span с новым значением
     */

    const li = event.target.closest("li");

    const span = li.querySelector("span");

    const icon = li.querySelector(".edit-btn i");

    const checkbox = li.querySelector('input[type="checkbox"]');

    if (span) {
        const { textContent: text } = span;

        const input = document.createElement("input");

        input.setAttribute("type", "text");

        input.focus();
        //чтобы курсор был при фокусе, когда нажимаем на edit
        input.value = "";
        input.value = text;


        input.addEventListener("keydown", submitTask);

        li.replaceChild(input, span);

        icon.classList.remove("fa-edit");
        icon.classList.add("fa-save");
        checkbox.disable = true;

        return;
    }

    saveTask(li, icon, checkbox);
}

export default editTask;