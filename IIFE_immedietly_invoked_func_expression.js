// IIFE

(function connection() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // here ; is necessary as it defines the context to end

// () ()
//  1st for declaration 2nd for execution

((name) => {
    console.log(`DB 2connected ${name}`);
})("MAV") 