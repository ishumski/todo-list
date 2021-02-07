import currentUser from "../current-user.js";
import { navigateToUrl } from "../routing.js";
import storageService from "../storage-service.js";
import userList from "../users.js"
import { checkIfHasErrors, showErrors } from "../utils.js";

const EMAIL_REGEX_LOGIN = /\S+@\S+\.\S+/;
const MIN_PASSWORD_LENGTH_LOGIN = 8;
const PASSWORD_REGEX_LOGIN = /(([a-zA-Z]+\d+)|(\d+[a-zA-Z]+))[a-zA-Z\d]/;

function validateLogin({ email, password }) {

    let errors = {
        email: [],
        password: [],
    }

    const user = userList.getUserByEmail(email);

    if (!user) {
        errors = { ...errors, email: [...errors.email, "Email cannot be empty"] };
    }
    const hashedPassword = CryptoJS.SHA3(password).toString();

    if (user.password !== hashedPassword) {
        errors = {
            ...errors, email: [...errors.email, "Password does not match"]
        }
    }
    return errors;
}

export default function loginUser(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const user = userList.getUserByEmail(email);

    const errors = validateLogin({ email, password });

    showErrors(errors);

    const hasErrors = checkIfHasErrors(errors);

    if (hasErrors) {
        return;
    }

    if (!user) {
        alert("User does not exist");
        return;
    }

    const hashedPassword = CryptoJS.SHA3(password).toString();

    if (user.password !== hashedPassword) {
        alert("Password does not match");
        return;
    }

    currentUser.login(user);
    storageService.set("currentUser", JSON.stringify(user));

    navigateToUrl("/");
}