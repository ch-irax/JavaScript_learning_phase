const promise_one = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task completed");
        resolve()
    }, 1000)
})

promise_one.then(function () {
    console.log("Promise consumed");

})


// here new promise completes both the tasks together
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task two");
        resolve()
    }, 1000)
}).then(function () {
    console.log("async 2 resolved");

})


const promise_three = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "MAV",
            email: "sdsd@ksnj.com"
        })
    }, 1000)
})
promise_three.then(function (u) {
    console.log(u);

})


// using .then() . catch method 

const promise_four = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false //returns the name directly , true will return error
        if (!error) {
            resolve({ username: "MMA", password: "123" })
        } else {
            reject(`ERROR Something went wrong`)
        }
    }, 2000)
})

const val = promise_four
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((chain) => {
        console.log(chain);

    })
    .catch((err) => {
        console.log(err);

    })
    .finally(() => console.log(`The promise is either resolved or rejected`))




// Using  async await (optional)

const promise_five = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ usrname: "Raga", Passwd: "567q2" })
        } else {
            reject(`ERROR: JS went wrong`)
        }
    }, 1000)
})

async function consume_promise_five() {
    try {
        const response = await promise_five
        console.log(response);
    } catch (error) {
        console.log(error);

    }

}
consume_promise_five()



fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))
