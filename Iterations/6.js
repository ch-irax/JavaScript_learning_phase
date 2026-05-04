const coding = ["js", "python", "cpp", "ruby", "go", "typescript"]

// const val = coding.forEach((item) => {
// console.log(item);
// return item

// })

// console.log(val);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const n_nums = nums.filter((val) => {
//     return val > 4
// })

const arr = []
nums.forEach((item) => {
    if (item > 4) {
        arr.push(item)
    }
})
console.log(arr);

