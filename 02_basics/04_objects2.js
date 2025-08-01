// const myObj= new Object()// singleton object 
const theObj=new Object()
theObj.hello="helloworld"
theObj.letter="a";
theObj[1]="ui"
console.log(theObj);

// const MyObj= {} // non-singleton object, it is a object literal
// nested object
// const myObj={
//     userid:"om123",
//     age:21,
//     fullname:{
//         firstname:"Om",
//         lastname:"Mishra"
//     }
// }
// //Accessing value inside nested object
// console.log(myObj.fullname.firstname);

const myobj1={1:"a",2:"b"}
const myobj2={3:"c",4:"d"}
const myobj4={myobj1,myobj2}// yaha pe dono object hi store ho jayege
console.log(myobj4);// Output:{ myobj1: { '1': 'a', '2': 'b' }, myobj2: { '3': 'c', '4': 'd' } }
 //const myobj3=Object.assign({},myobj1,myobj2)// yaha pe empty object{} target ki tareh act kar raha hai baki myobj1 and myobj2 source ki tareh act kar rahe hai 
 //console.log(myobj1===myobj3)// since yaha pe myobj1 source hai isliye usme koi changes nahi aye aur myobj1 aur myobj3 alag alag hai isiliye output false hai yaha pe 
const myobj3=Object.assign(myobj1,myobj2)// yaha pe myobj1 target hai aur myobj2 source hai therefore myobj1 ke andar myobj2 add ho jayega aur myobj1 ki original values change ho jayegi.
console.log(myobj1===myobj3)// since myobj1 ki values change hoke wahi myobj3 me assign ho gayi hai to yaha pe dono equal hai therefore output true ayega yaha pe 

// adding objects using spread operator 
const myobj5={...myobj1,...myobj2}
console.log(myobj5);

// accessing keys and values of an object
const myObj={
    userid:"om123",
    age:21,
    fullname:{
        firstname:"Om",
        lastname:"Mishra"
    }
}
// console.log(Object.keys(myObj));// gives an array of all the keys of the object
// console.log(Object.values(myObj));// gives an array of all the values of the object
// console.log(Object.entries(myObj));// gives an array whose each element is itself an array of key value pair of the object

// asking question from object itself
//.hasOwnProperty checks whether a given property is in the object or not
console.log(myObj.hasOwnProperty('age'))// true 
console.log(myObj.hasOwnProperty('isLoggedIn'))// false


// Object Destructuring
const course={
    coursename:"js",
    price:"free",
    teacher:"Hitesh"
}
const {coursename}=course
console.log(coursename);
const {coursename:name}=course
console.log(name);

// API
// api comes in the format of objects or can be a array of objects
// {
//     "name":"om",
//     "price":"free"
// }

// [
//     {}
//     {}
//     {}
// ]
