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

function calculateCart(val1, val2, ...num1) {   //rest operator (... ) returns array of items
    return num1
}

// console.log(calculateCart(100, 200, 300, 3323, 3, 3434)); //val1=100 , val2=200

const test_object = {
    name: "Mav",
    age: 22,
    id: "26MVK220"
}

function handleobject(any_object) {
    console.log(`Name ${any_object.name}, age ${any_object.age}, id ${any_object.id}`);
}
// handleobject(test_object)

// object can be passed on function call
// handleobject({
//     name:"newuser",
//     age:33,
//     id:"sdadwee32"
// })

let myArray = [100, 300, 500, 700, 900]

function fetchSecond(anyArray) {
    return anyArray[1]
}

console.log(fetchSecond(myArray));