let score = "55" //string

console.log(typeof score);
console.log(typeof (score));

let value_number = Number(score) // type conversion of string to number
console.log(typeof (value_number));


// Exceptional case where a blend of number and char is converted to the number.

let mix1 = "55ez" //mix of types
let conv_mix1 = Number(mix1) // type conversion 
console.log(typeof (conv_mix1));


let mix2 = true //bool 
let conv_mix2 = Number(mix2) // type conversion 
console.log(conv_mix2);
console.log(typeof (conv_mix2));


let mix3 = null //null
let conv_mix3 = Number(mix3) // type conversion 
console.log(conv_mix3);
console.log(typeof (conv_mix3));


let mix4 = undefined //undefined
let conv_mix4 = Number(mix4) // type conversion 
console.log(conv_mix4);
console.log(typeof (conv_mix4));


let isLoggedIN = 1
let converted = Boolean(isLoggedIN);
console.log(converted);


// **********************OPERATIONS*************************
// let str1= "h"
// let str2= "i"
// console.log(str1+str2);


// syntax for string interpolation modern method using - ``
let name = "mav"
let age = 20

console.log(`hi this is ${name} and age is ${age} `);

const str = new String('maverick-cc')

console.log(typeof (str));
console.log(str);

// string functions

console.log(str[3]);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(5));
console.log(str.indexOf('m'));

// useful

console.log(str.slice(-10, 3));  //slice allows to break a string using -ve indexes
console.log(str.substring(0, 5)); //it will ignore the -ve value and go with 0

const newstr = "   spac  sds  "
console.log(newstr.trim()); //removes the spaces from back and front 

const url = "https://mav.com/mav%20rick"

console.log(url.replace('%20', '-'));

const sample_string = new String("This is a test string to split the array")
console.log(sample_string.split(" "));

const n = 100;
console.log(typeof (n));

console.log(number.toString().length);
const number = new Number(100);

let stri = number.toString()
console.log(typeof (stri));

  