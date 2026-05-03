// const usr_email = "example@string"
const usr_email = []

if (usr_email.length === 0) {
    console.log("empty array");

}

if (usr_email) {  // string is considered true and floe continues
    console.log("email found");

} else {
    console.log("email not found"); // if the string is empty it is considerd false

}

// falsy values

// 1.false
// 2. 0
// 3. -0
// 4. bigint 0n
// 5. " "
// 6. null
// 7. undefined
// 8. NaN

// Truthy values

// 1. "0"
// 2. "fales"
// 3. " "
// 4. []
// 5. {}
// 6. function () {}  - empty function

const ex_object = {}


// Object.keys() returns the array of the elements and  .length checks the length of the array.
if (Object.keys(ex_object).length === 0) {
    console.log("Empty object");

}

// false == 0  -> true
// false == '' -> true
// 0 == '' -> true


// Nullish Coalescing Operator (??): null undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 100
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 111

// console.log(val1);


// Terniary Operator
// condition ? true : false

latte_price = 300
latte_price >= 500 ? console.log("no orders") : console.log("Place order");

