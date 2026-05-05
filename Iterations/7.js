const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums = myNumbers.map((val) => { return val + 10 })
// console.log(newNums);

// const val = myNumbers.forEach((item) => {
//     console.log(item + 10);

// })
// console.log(val);

const nums = myNumbers.map((val) => { return val * 10 }).map((val) => { return val + 1 }).filter((val) => { return val >= 40 })

console.log(nums);

