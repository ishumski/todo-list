import renderList from "./renderList.js"
import renderLists from "./renderLists.js"
import renderRegistration from "./render-registration.js"
import renderLogin from "./render-login.js"
import { getListIdByUrl } from "./utils.js"
import lists from "./lists-list.js"
import currentUser from "./current-user.js"

const listRoutePattern = /^\/list\/\d+$/;//обозначение уровня листа

const INDEX_URLS = ["/", "/index.html"];

const REGISTRATION_URL = "/registration";

const LOGIN_URL = "/login";

export function renderPage() {
    const { pathname: currentUrl } = window.location;

    if (currentUrl === REGISTRATION_URL) {
        renderRegistration();
        return;
    }

    if (currentUrl === LOGIN_URL) {
        renderLogin();
        return;
    }

    if (!currentUser.userData) {
        navigateToUrl(LOGIN_URL);
        return;
    }
    if (INDEX_URLS.includes(currentUrl)) {
        renderLists();
        return;
    }

    if (listRoutePattern.test(currentUrl)) {
        const listId = getListIdByUrl();

        const list = lists.getListById(listId);
        if (list.userId !== currentUser.userData.id) {
            navigateToUrl("/"); 
        }
        renderList();
        return;
    }
}

export function navigateToUrl(url) {

    window.history.pushState({}, url, window.location.origin + url);

    renderPage();
}