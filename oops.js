const user = {
    uname:"mav",
    logincount:9,
    signedin:true,

    getuserdetails: function () {
        console.log(`Got user details from database`);
        
    }
}

console.log(user.uname);
console.log(user.getuserdetails());

