// const arr=[0,1,2,3,4,5]
// // const newArr= new Array(1,2,3,45,69) this is also how we declare an array
// console.log(arr,typeof arr)
// // Array methods
// arr.push(10)// adds element at last
// console.log(arr);
// arr.pop()// remove element from the last 
// console.log(arr)
// arr.unshift(66)// add element at starting
// console.log(arr)
// arr.shift()// remove element at starting
// console.log(arr)

// const arr1=[25,45,21]
// const arr2= arr1.join()// convert the array to string with comma seprated value
// console.log("arr1",arr1,typeof arr1)
// console.log("arr2",arr2,typeof arr2)

// slice and splice

//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// slice sytax:  slice(start, end)
// start: start refers to the starting index from where the array will be sliced and the start is included
// end: end refers to the end index till which slicing will be done and the end index is excluded.


//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//splice syntax:  splice(start, deleteCount, item1, item2, /* …, */ itemN)
// start: start refers to the index from where you want to splice the array the start index is included.
// deleteCount: this refers to the number of elements to be deleted from the start index including the start index
// item1,item2,...,itemN: these are the elements which will be added in the place of the deleted elements.

const myarr=[10,20,30,40,50]
 console.log("Original Array",myarr)
//  const myslicearray=myarr.slice(1,3)
//  console.log("Myslicearray",myslicearray)
//  console.log("Original array after using slice",myarr);
 const mysplicearray=myarr.splice(1,3,"om","shiv")
 console.log("Mysplicearray",mysplicearray)
 console.log("Original array after using splice",myarr);
 