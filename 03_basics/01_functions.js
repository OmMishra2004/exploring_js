// function login(username){
//     // in js an empty string "" and a undefined value are considered to be false
//     if(!username)// hence here when the username is has undefined value or an empty string that is false the ! symbol converts that to true value hence the if part gets executed.
//     {
//         return `Please enter a username`
//     }
//     else{
//         return`${username} just logged In`
//     }
// }
// console.log(login("Om"))//Output:Om just logged In
// console.log(login(""))//Output:Please enter a username
// console.log(login())//Output:Please enter a username

// // if(false){
// //     console.log("A")
// // }
// // else{console.log("B");}

// function login1(username="Someone"){// but here when there is no vlaue passed while calling the function instead of taking the undefined value it will take the default value given here as "Someone".
//     // in js an empty string "" and a undefined value are considered to be false
//     if(!username)// hence here when the username is a empty string "" that is false the ! symbol converts that to true value hence the if part gets executed.
//     {
//         return `Please enter a username`
//     }
//     else{
//         return`${username} just logged In`
//     }
// }
// console.log(login1("Om"))// Output:Om just logged In
// console.log(login1(""))// Output:Please enter a username
// console.log(login1())// Output:Someone just logged In

function calculateCartPrice1(num1) {
    return num1
}
console.log(calculateCartPrice1(200,300,400))// here we are passing three values in the functions but there is only one formal parameter in the function definition hence only the first value will be used in the function

function calculateCartPrice2(val1,val2,...num2) {
    return num2
}
console.log(calculateCartPrice2(200,300,400,500))// here we are using ... (rest operator) hence we are getting all the values in an array
//The JavaScript rest parameter, often referred to as the rest operator, is denoted by three dots (...) and is used in function definitions to collect an indefinite number of arguments into an array. It allows a function to accept any number of arguments beyond those explicitly named in the parameter list.

// passing objects in the function
const user={
    username:"Om Mishra",
    price:199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)// first creating an object then passing 
handleObject({
    username:"Shiv",
    price:200
})// directly creating and passing object

// passing arrays in the function
function secondvalue(arr) {
    console.log(`Second value of the array is ${arr[1]}`)
}
arr1=[50,48,45]
secondvalue(arr1)
secondvalue([57,98,100])