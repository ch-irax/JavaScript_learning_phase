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

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task two");
        resolve()
    }, 1000)
}).then(function () {
    console.log("async 2 resolved");

})