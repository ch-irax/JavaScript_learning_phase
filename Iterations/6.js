// const coding = ["js", "python", "cpp", "ruby", "go", "typescript"]

// const val = coding.forEach((item) => {
// console.log(item);
// return item

// })

// console.log(val);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const n_nums = nums.filter((val) => {
//     return val > 4
// })

// const arr = []
// nums.forEach((item) => {
//     if (item > 4) {
//         arr.push(item)
//     }
// })
// console.log(arr);


const books = [
    { title: "book one", genre: "fiction", publish: "1990" },
    { title: "book two", genre: "non fiction", publish: "1991" },
    { title: "book three", genre: "drama", publish: "1994" },
    { title: "book four", genre: "rom", publish: "2000" },
    { title: "book five", genre: "non fiction", publish: "1998" },
    { title: "book six", genre: "action", publish: "1999" },
    { title: "book seven", genre: "sci", publish: "2010" },
    { title: "book eight", genre: "History", publish: "2011" },
    { title: "book nine", genre: "non fiction", publish: "2012" },
    { title: "book ten", genre: "drama", publish: "2028" },
    { title: "book eleven", genre: "art", publish: "2026" },
    { title: "book twelve", genre: "History", publish: "2014" },
    { title: "book thirteen", genre: "non fiction", publish: "1980" },
]

// const user_books = books.filter((item) => {
//     return item.genre == "non fiction"
// })

// console.log(user_books);


const pub_book = books.filter((pub)=>{
    return pub.publish >= 2000 &&  pub.genre=="History"
})

console.log(pub_book);
