// singleton
// Object.create

// non-singleton
//Object literals

let mysym=Symbol("hello")// this is symbol just created to use in the object below
// creating an object literal
// all the keys of an object are of string data type by default
const myObj={
    name:"Om Mishra",//string value
    age:21,//number value
    isLoggedIn: false,//bollean value
    "course":"B.Tech",//here we explicitly define the key as an string 
    [mysym]:"this is a symbol"// symbol used in object
}
// Accessing the value of a key-value pair of an object
// Method1: using dot . notation
// console.log(myObj.name);// but there is a limitation in method one that you cannot access the value of a key which is explicitly defined as a string and a symbol
// // Method 2: here you can access any value even if key is explicitly defined
// console.log(myObj["name"])
// console.log(myObj["course"])
// console.log(myObj[mysym])

// myObj.name="hello"
// Object.freeze(myObj)// this is used to freeze an object so that no further changes can be done to the object.
// myObj.age=25
// console.log(myObj)

// adding function in object
myObj.greetings=function(){
    console.log("hello user");
    console.log(`your age is ${this.age}`)// here we are using the value stored within the obect myObj
}
console.log(myObj)
console.log(myObj.greetings)// this will only give reference to the function
console.log(myObj.greetings())// this will run the function given in that variable