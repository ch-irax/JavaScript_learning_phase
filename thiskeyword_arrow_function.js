const user_obj = {
    uname: "Aks",
    u_id: 178,

    welcome_message: function () {
        console.log(`${this.uname}, welocme to the JS env`);
        console.log(this);

    }
}

// user_obj.welcome_message()
// user_obj.uname = "Arman"
// user_obj.welcome_message() 

// console.log(this);

function tsarukyan() {
    let name = "arm"
    console.log(this.name);  // NOTE: 'this' keyword is used only in objects 

}

// tsarukyan()

// ARROW FUNCTION

// () => {}

const add_two = (num1, num2) => {
    return num1 + num2
}

console.log(add_two(6, 7));
