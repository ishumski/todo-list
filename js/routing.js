import renderList from "./renderList.js"
import renderLists from "./renderLists.js"
import renderRegistration from "./render-registration.js"
const listRoutePattern = /^\/list\/\d+$/;//обозначение уровня листа

const INDEX_URLS = ["/", "/index.html"];

const REGISTRATION_URL = "/registration";

export function renderPage() {
    const { pathname: currentUrl } = window.location;

    if (INDEX_URLS.includes(currentUrl)) {
        renderLists();
        return;
    }

    if (listRoutePattern.test(currentUrl)) {
        renderList();
        return;
    }

    if(currentUrl === REGISTRATION_URL){
        renderRegistration();
    }
}

export function navigateToUrl(url) {

    window.history.pushState({}, url, window.location.origin + url);

    renderPage();
}