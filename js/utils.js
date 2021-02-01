export function getId(element) {
    return parseInt(element.id.split("-")[1]);
}

export function generateId(tasks) {
    //получаем массив со всеми id  еtask
    const ids = tasks.map(task => {
        return task.id;
    });

    //если пустой массив, то начинаем id с 1
    if (!ids.length) {
        return 1;
    }

    // назодим максимальный id 
    const maxId = Math.max(...ids);

    //возвращаем новый, которы болььше максимального на 1
    return maxId + 1;
}

export function getListIdByUrl() {
    const currentUrl = window.location.pathname;

    const splittedCurrentUrl = currentUrl.split("/");

    return parseInt(splittedCurrentUrl[splittedCurrentUrl.length - 1], 10);
}

export function showErrors(errors) {
    for (let key in errors) {
        const span = document.querySelector(`input[name="${key}"] + span`);
        if (errors[key].length > 0) {
            const errorStr = errors[key].join("\n");

            span.innerHTML = errorStr;
        } else {
            span.innerHTML = "";
        }
    }
}

export function checkIfHasErrors(errors) {
    return Object.keys(errors).some(key => errors[key].length > 0);
}