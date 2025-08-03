// const user={
//     username:"Om Mishra",
//     price:123,
//     welcomemsg: function(){
//         console.log(`${this.username}, welcome to the website`)
//     }
// }
// // console.log(user.welcomemsg)// do not runs the function just gives the reference of the function output: [Function: welcomemsg]
// // user.welcomemsg()// this runs the function
// console.log(user.username)
// user.welcomemsg()
// user.username="Shiv"
// console.log(user.username)
// user.welcomemsg()
// console.log(this)// this gives output as an empty object
// but if we console.log(this) in the browser console then that give us a window object which is a global object.





// using (this method) in functions

// const one=function(){
//     let myname="Om"
//     console.log(this)// here this will give a global object
// }
// one()
const one=()=>{
    let myname="Om"
    console.log(this)// but here in arrow function it will give a empty object as output
}
one()
//this Binding:
// Normal Functions: Have their own this context, which is determined by how the function is called. Its value can change depending on the invocation.
// Arrow Functions: Do not have their own this binding. They lexically bind this, meaning they inherit this from the surrounding (parent) scope where they are defined. This makes them ideal for callbacks where you want this to refer to the context of the enclosing code.





// Normal arrow function or explicit return arrow function
const sum=(num1,num2)=>{ 
    return num1+num2
}
console.log(sum(2,6))

// Implicit return arrow function
const addtwo=(one,two)=>one+two// way 1
console.log(addtwo(7,2))
const addtwonum=(one,two)=>(one+two)// way 2
console.log(addtwonum(10,2))
const returnobj=()=>({username:"om"})
console.log(returnobj())