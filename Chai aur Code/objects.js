let mySym = Symbol("Key1")

let obj1 = {
    name: "Mav",
    contact: 23456788328,
    [mySym]: "Key_symb",
    age: 20,
    isloggedIn: true,
    email: "hrx@gmail.com",

}

obj1.greetings = function () {
    console.log(`Greetings ${this.name}`); // string interpolation method using this.     this refers to the object itself
}

console.log(obj1.greetings());
obj1.neww = "new_element"

// obj1.email = "djnj@gmail.com"
obj1["email"] = "djnj@gmail.com"



// console.log(obj1.email);

// console.log(obj1.name);
// console.log(obj1.age);
// console.log(obj1.contact);

// Object.freeze(obj)  
// console.log(obj1);