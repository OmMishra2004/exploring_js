//Immediately Invoked Function Expressions (IIFE)
// we use iife to avoid global scope contaminaton into aur functions.

// named IIFE
(function one(user){
    console.log(`hello ${user}, this is a named IIFE`)
})("Om");

// VERY IMPORTANT POINT WHEN WRITING TWO iife ONE AFTER THE ANOTHER YOU MUST USE A SEMICOLON TO END THE FIRST IIFE
// OTHER WISE THERE WILL A ERROR CAUSED


// Unamed or normal IIFE
((user)=>{
    console.log(`hello ${user}, this is a unamed IIFE`)
})("Shiv")