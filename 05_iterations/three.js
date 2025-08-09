// Array and object specific loops

// for of loop
// Syntax: 
// for (const element of object) {
    
// }
const arr1=[1,2,3,4,5]
for (const i of arr1) {
    //console.log(i)
}

const str1="Hello World"
for (const i of str1) {
    //console.log(i)
}

// Maps
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map = new Map();

// map.set("a", 1);
// map.set("b", 2);
// map.set("c", 3);

// console.log(map.get("a"));
// // Expected output: 1

// map.set("a", 97);

// console.log(map.get("a"));
// // Expected output: 97

// console.log(map.size);
// // Expected output: 3

// map.delete("b");

// console.log(map.size);
// Expected output: 2

const myobj={1:"a",2:"b",3:"c",1:"d"}// yaha pe 1 ki value overwrite ho jayegi ie 1:d ho jayega
//console.log(myobj);
const map1= new Map()
map1.set(1,"a")
map1.set(2,"b")
map1.set(3,"c")
map.set(1,"d")// yaha pe 1 ki value overwrite nahi hogi
//console.log(map1);

// we can apply forof loop on maps but we cannot apply for of loop on objects 
for (const i of map1) {
    //console.log(i)
}// here we will get output in form of array and each array has two elements first is the key and second is the value

for (const [key,value] of map1) {
    console.log(`key is ${key}, value is ${value}`)
}// here key and value will get seperated and we can use them as seperate values