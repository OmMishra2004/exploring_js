// const arr1=[10,30]
// const namearr=["om","shiv"]
// const a=[0,1]
// // const combinedarray=arr1.concat(namearr,a)
// // console.log(combinedarray);

// // another way to add up all the arrrays is using spread operator 
// const combinedarray=[...arr1,...namearr,...a]// this three dots is called spread operator which is used to simply spread the element from the array and use them as individual elements
// console.log(combinedarray);

// let b=[1,2,[3,4,[5,6]]]
// console.log(b)
// console.log(b.flat(1))// flat is used to breakdown array inside array and give a new simplified array
// console.log(b.flat(2))// the number inside array tells till how much depth the breakdown must go on.
// console.log(b)

// more methods of array
console.log(Array.isArray("Om Mishra"))//The Array.isArray() static method determines whether the passed value is an Array.
console.log(Array.from("Om Mishra"))//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(Array.of("Om Mishra",1,"hello"))//The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
