import renderList from "./renderList.js"
import renderLists from "./renderLists.js"
import renderRegistration from "./render-registration.js"
import renderLogin from "./render-login.js"
const listRoutePattern = /^\/list\/\d+$/;//обозначение уровня листа

const INDEX_URLS = ["/", "/index.html"];

const REGISTRATION_URL = "/registration";

const LOGIN_URL = "/login";

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

    if(currentUrl === LOGIN_URL){
        renderLogin();
        }
}

export function navigateToUrl(url) {

    window.history.pushState({}, url, window.location.origin + url);

    renderPage();
}