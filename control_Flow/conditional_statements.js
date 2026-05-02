// let balance = 1000

// if (balance <= 500) {
//     console.log("less");
// } else if (balance > 1000) {
//     console.log("more");

// } else if (balance == 1000) {
//     console.log("maintained");
// }

let token = 500

// if (token >= 500) {
//     const power = "fly"
//     console.log(`Power granted: ${power}`);

// }
// console.log(`Power granted: ${power}`);  scope of the variable power is local 

// Single statement can be executed in the same line 
let limit = 100
// if (limit < token) console.log("Limit achieved"), console.log("Try after 10hrs"); // considered but not a good practice to use in production

const isLoggedIn = true
const isLoggedIn_google = false
const is_elder = true
const has_debitcard = true

if (isLoggedIn && has_debitcard) {  //both conditions should be satisfied AND operator
    console.log("Access granted");
}
if (isLoggedIn && is_elder) {
    console.log("keys granted");
}
if (isLoggedIn || isLoggedIn_google) {  //any one condition should satisfy  OR operator
    console.log("Ready to proceed");
}
