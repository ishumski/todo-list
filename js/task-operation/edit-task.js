function editTask(event) {
    /*
    находим спан текущего task
    записываем его соднржимое в переменную
    создаём текстовый инпут и вставляем его вмемто спан
    задаём value инпута спану, который сохранен
    после повторного нажатия на кнопку этдит
    сохраняем текущее значение инпута
    меняем инпут на спан с новым значением
     */

    const li = event.target.closest("li");

    const span = li.querySelector("span");
    if (span) {


        const { textContent: text } = span;

        const input = document.createElement("input");
        input.setAttribute("value", text);
        input.setAttribute("type", "text");
        li.replaceChild(input, span);
        return;
    }
    const input = li.querySelector('input[type="text"]');
    const { value: newText } = input;

    const newSpan = document.createElement("span");
    newSpan.textContent = newText;
    li.replaceChild(newSpan, input);
}

export default editTask;