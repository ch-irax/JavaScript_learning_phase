// let date = new Date()
// console.log(date.toDateString());
// console.log(date.toJSON());
// console.log(date.toString());
// console.log(date.toTimeString());

let my_date = new Date()
// console.log(my_date.toDateString());
// console.log(my_date.toJSON());
// console.log(my_date.toString());
// console.log(my_date.toTimeString());

// console.log(my_date.getDay());

const spec = my_date.toLocaleString("default", {
    day: "2-digit",
    month: "long"
})
console.log(spec);
