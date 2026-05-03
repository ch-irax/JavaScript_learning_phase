// for off loop


// [" "," "," "]
// [{ },{ },{ }]

const arr = [1, 2, 3, 4, 5, 6]

for (const val of arr) {
    // console.log(val);

}

const str = "MAVERICK"

for (const lett of str) {
    // console.log(`Seperate value ${lett}`);

}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")  // map takes only unique values, keeps order same

// console.log(map);

for (const [key, value] of map) {  // [key,value] this method is used to seperate the key - value pairs
    // console.log(key, ':-', value);

}


const myobj = {
    game1: "GTA",
    game2: "Gta5"
}


// for of is not applicable for objects

// for (const [key, value] of myobj) {
//     console.log(key, ':-', value);

// }

