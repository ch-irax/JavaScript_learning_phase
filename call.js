function setuname(username) {
    // complex DB calls
    this.username = username
}

function createuser(username, email, password) {
    setuname.call(this, username)

    this.email = email
    this.password = password
}

const data = new createuser("max", "xhrdns33@gmail.com", "231232")
console.log(data); 