import { renderPage } from "./routing.js";

renderPage();

//для работы кликов кнопок в браузере "вперед" "назад"
window.addEventListener("popstate", () => {
    renderPage();
});
