import currentUser from "../current-user.js";
import { navigateToUrl } from "../routing.js";
import storageService from "../storage-service.js";
import userList from "../users.js"

const EMAIL_REGEX_LOGIN = /\S+@\S+\.\S+/;
const MIN_PASSWORD_LENGTH_LOGIN = 8;
const PASSWORD_REGEX_LOGIN = /(([a-zA-Z]+\d+)|(\d+[a-zA-Z]+))[a-zA-Z\d]/;


function validateUser({ email, password }) {

    let errors = {
        email: [],
        password: [],
    }

    if (!email) {
        errors = { ...errors, email: [...errors.email, "Email cannot be empty"] };
    }

    if (email && !EMAIL_REGEX_LOGIN.test(email)) {
        errors = { ...errors, email: [errors.email, "Email invalid format"] };
    }

    if (!password) {
        errors = { ...errors, password: [...errors.password, "Password cannot be empty"] };
    }

    if (password.length < MIN_PASSWORD_LENGTH_LOGIN) {
        errors = { ...errors, password: [...errors.password, `Password should contain at least ${MIN_PASSWORD_LENGTH_LOGIN} characters`] };
    }
    if (password && !PASSWORD_REGEX_LOGIN) {
        errors = { ...errors, email: [...errors.email, "Password invalid format"] };
    }

    return errors;
}

export default function loginUser(event) {

    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const user = userList.getUserByEmail(email);



    const errors = validateUser({ email, password });
    let hasErrors = false;

    for (let key in errors) {
        const span = document.querySelector(`input[name="${key}"] + span`);
        if (errors[key].length > 0) {
            hasErrors = true;
            const errorStr = errors[key].join("\n");

            span.innerHTML = errorStr;
        } else {
            span.innerHTML = "";
        }
    }
    // if (!user) {
    //     alert("User does not exist");
    //     return;
    // }



    const hashedPassword = CryptoJS.SHA3(password).toString();

    if (user.password !== hashedPassword) {
        alert("Password does not match");

        return;
    }

    currentUser.login(user);
    storageService.set("currentUser", JSON.stringify(user));

    navigateToUrl("/");
}