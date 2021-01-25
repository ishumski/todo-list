import storageService from "./storage-service.js"

class UserList {
    constructor(users) {
        this.users = users;
    }

    add(user) {
        const exitingUser = this.getUserByEmail(user.email);

        if (exitingUser) {
            throw new Error("User with this email already exists");
        }

        this.users = [...this.users, user];

    }
    getUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }
}

const users = JSON.parse(storageService.get("users"));

const userList = new UserList(users || []);

export default userList;
