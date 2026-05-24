// ES6

// Constructor

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword() {
        return `${this.password}acb77`
    }
    changeusercase() {
        return `${this.username.toUpperCase()}`
    }
}

const max = new User(`mazzx`, `skjb@7aabsk.com`, "12112bb")

console.log(max.encryptPassword());
console.log(max.changeusercase());


// behind the scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.encryptPassword