import currentUser from "../current-user";
import { navigateToUrl,  LOGIN_URL} from "../routing";
import storageService from "../storage-service";


//повесить на кннопку выхода
export default function logout() {
    currentUser.logout();

    storageService.set("currentUser", null);

    navigateToUrl(LOGIN_URL);
}