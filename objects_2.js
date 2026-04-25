const user_info = new Object()

user_info.id = "153@2026"
user_info.name = "Mav"
user_info.age = "20"
user_info.isLoggedIn = false

// console.log(user_info);

const part_user = {
    email: "xyz@gmail.com",
    // initial: {
        // userini: "mavax",
        // userprim: "kev"
    // }
}

// console.log(part_user.initial.userprim); declaring object in side object

// console.log(part_user, user_info);  
const comb_obj = Object.assign({}, user_info, part_user)//combines multiple objects together use {} as a target object(which is empty) and  multiple objects as a source object.

console.log(comb_obj == user_info);  