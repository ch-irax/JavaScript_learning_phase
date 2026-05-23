const user = {
    uname: "mav",
    logincount: 9,
    signedin: true,

    getuserdetails: function () {
        console.log(`Got Username:${this.uname} details from database`);

    }
}

// console.log(user.uname);
// console.log(user.getuserdetails());

// const promiseone = new Promise()
// const date = new Date()

function Usr(username, logincount, isLoggedIn) {
    this.username = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new Usr("mm", 67, false)
const user2 = new Usr("m", 7, false)
console.log(userOne);
console.log(user2);
