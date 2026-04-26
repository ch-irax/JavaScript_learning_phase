// Global and local scope
let a = 100  //global scope
if (true) {
    let a = 10 // local scope
    const b = 20
    // var c = 30
    console.log(`Inner variable ${a}`);
}

// console.log(a);
// console.log(b);
// console.log(c);

function first() {
    const name = "MAv"

    function second() {
        const surname = "rik"
        console.log(name);

    }
    // console.log(surname);   we cant access anything from local scope in global and vice versa

    second()
}

first( )