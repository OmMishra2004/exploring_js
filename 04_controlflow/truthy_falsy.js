// truthy or falsy values ka matlab hota hai ki kin kin values ko hamlog truth ya false assume karleter hai. eg: "" => empty string false hoti hai , "hi"=> filled or non-empty string true hoti hai
// let userEmail1="om.com"// considered truth value
// if (userEmail1) {
//     console.log("Got user email.")
// }else{
//     console.log("didn't got user email")
// }
// let userEmail2=""// considered false value
// if (userEmail2) {
//     console.log("Got user email.")
// }else{
//     console.log("didn't got user email")
// }

// falsey values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// all other values except the above are considered truthy values 
// some truthy values that can surprise you are 
//"0",'false'," "(string with a space),{},[],function(){} this is empty function

// checking whether an array is empty
const arr=[]
if (arr.length===0) {
    console.log("Array is empty")
}


// checking whether an object is empty
const obj={}
if (Object.keys(obj).length===0) {
    console.log("Object is empty")
}

// false==0 => gives output as true
// false=="" => gives output as true
// ""==0 => gives output as true

// Nullish Coalescing Operator (??). This deals with null and undefined
let val1;
// val1=55??10 // here the first value encountered i.e 55 will be assigned
//val1=null??10// here null will be ignored eventhough it comes first and 10 will be assigned
// val1=undefined??14// here also undefined will be ignored and 14 will be assigned
// val1=undefined??null// here null will be assigned
// val1=null??undefined// here undefined will be assigned
val1=null??100??50//  here null will be ignored and the first real value encountered will be assigned here it is 100
console.log(val1);

// ternary operator=> Conditional Operator
// syntax=> condition ? true statement : false statement
const price=100
price >=80? console.log("more than or equal to 80"): console.log("less than 80")