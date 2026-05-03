// Underastanding forin loop

const MYobj = {
    js: "javascript",
    cpp: "C++",
    py: "python",
    rb: "ruby"
}

for (const key in MYobj) {
    // console.log(`${key} for ${MYobj[key]}`);

}

const nwarr = [1, 2, 3, 4, 5, 6]

for (const key in nwarr) {
    // console.log(nwarr[key]);

}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

// maps are not iteratable therefore, no output

// for (const key in map) {
//     console.log(map[key]);
// }
