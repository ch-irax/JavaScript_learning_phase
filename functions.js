function sum(a, b) {
    return a + b
}

result = sum(2, 6)
// console.log(result)

const arrfun = (x) => {
    console.log("This is arrow function", x)
}

// arrfun(100)


function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());



// Functions with arrays and Object

function calculateCart(num1) {
    return num1
}

console.log(calculateCart(100, 200, 300));
