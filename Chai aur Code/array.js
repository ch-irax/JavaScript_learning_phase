// const myArr = [1, 2, 3, 4, 5, "array"]

//  myArr.push(10)
//  myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);
// console.log(typeof myArr);

// console.log("Original array:- ", myArr);

// const newArr1 = myArr.slice(1, 4)
// console.log("A: sliced array", newArr1); // doesn't manipulates original array

// const newArr2 = myArr.splice(1, 4)
// console.log("B: spliced array", newArr2); // manipulates original array, includes the last element of index 

// console.log("Original array after operations:- ", myArr);

const marvel_heros = ["ironman", "thor", "hulk", "blackwidow"];
const dc_heros = ["superman", "batman", "wonderwomen", "flash"];

// const new_arr = marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(new_arr);
// console.log(marvel_heros[4][2]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); returns concatenated array in new array

const assemble_array = [...marvel_heros, ...dc_heros]  // spread array  
// console.log(assemble_array);

const messed_array = [1, 2, 3, [4, 5], 6, 7, [8, 9, 10, [11, 12]]]

const real_array = messed_array.flat(Infinity) //flat returns a concatinated array recursively
// console.log(real_array);

// convert to array

// console.log(Array.from("Newarray"))

let x=10
let y=100
let a=1000
let m=10000
let z=100000
let n=1000000

console.log(Array.of(x,y,z,m,a,n)); // array from multiple variables
