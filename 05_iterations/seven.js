// The map() method creates a new array by calling a provided callback function on every element in the calling array. It is primarily used for transforming each element into a new value.
const numbers=[1,2,3,4,5,6,7,8,9,10]
const newNumbers= numbers.map((num)=>{return num+10})
// console.log(newNumbers)

// Chaining of map and filter
let newnum=numbers.map((num)=>num+3).map((num)=>num*5).filter((num)=> num%2==0)
console.log(newnum)