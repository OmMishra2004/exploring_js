// let a = 100// global scope
// const b =200// global scope

// if (true) {
//     let a = 10// local scope
//     const b = 20// local scope
//     // var c = 30
//     console.log("value of a inside the if statement",a)
//     console.log("value of b inside the if statement",b)
// }
// console.log("value of a outside the if statement",a)// this will give an error because let is used to define a which obey block scoping
// console.log("value of b outside the if statement",b)//this will give an error because const is used to define b which obey block scoping
// // console.log(c)// this will print the value of c as 30 because var does not obey block scoping

// scoping in nested functions
// In nested functions the child function can access the variables defined in the parent function but the parent function cannot access the variables defined in the child function
// function one(){
//     const username="Om"
//     function two(){
//         const website="youtube.com"
//         console.log(username)
//     }
//     // console.log(website) this gives error
//     two()
// }
// one()

// scoping in nested if else
if (true) {
    const username="om"
    if (true) {
        const website=" youtube"
        console.log(username+website)
    }
    // console.log(website) this will give an error
}
// console.log(username) this will give an error as well

//++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++

// little bit of hoisting topic is covered here

// but when we simply declare the function without storing it into a variable then we can access the function before as well as after the initialization/declaration
addone(5)
function addone(num1) {
    console.log(num1+1)
}
addone(20)

// when we store a function inside a variable then we can access that function only after the initialization/declaration
//addtwo(10)//Cannot access 'addtwo' before initialization
const addtwo=function(num2) {
    console.log(num2+2)
}
addtwo(10)