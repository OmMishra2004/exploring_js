// the datatypes are basically divided into two types on the basis of their value is stored in the memory and accessed from the memory.

// 1) Primitive datatypes
/* => these are call by value datatypes that means you can perform changes on the copied value original value remain intact
   => there are 7 types of primitive datatypes:
      1)string 
      2)number 
      3)boolean
      4)null// In the early versions of JavaScript, values were stored in 32-bit units, which included a type tag. The type tag for objects was 000. null was also given a type tag of 000, which led to typeof null evaluating to "object".
      5)undefined
      6)symbol
      7)BigInt
      */


// Non-Primitive or Reference data types
/*
=> these are call by refernce datatypes that means you perform changes on the original value and the original value get changed.

=> Array, 
Objects, 
functions// type of function return function but function is an object function 
are some examples
*/

// symbols
let id1=Symbol("123")
let id2=Symbol("123")
console.log(id1==id2)// the output will be false because we used symbol datatype therefore id1 and id2 are unique with respect to each other eventhough the may hold the same value

let arr=["Om","shiv"]
let obj={
    name:"om",
    age:20
}
const myfunc= function(){
    console.log("jai shree ram")
}
console.table([typeof arr,typeof obj,typeof myfunc,typeof id1])

//You can identify a BigInt by appending n to an integer literal (e.g., 123n) or by using the BigInt() constructor (e.g., BigInt("123")). The typeof operator will return "bigint" for a BigInt value.

//Return type of variables in JavaScript
/*1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object*/