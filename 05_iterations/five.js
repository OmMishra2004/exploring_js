const arr=["om","shiv","harshit","madhav"]
// for each loop is not a seprate loop it the prototype property that comes with an array and is considered as high order array loop

// forEach() takes a call back function. We can give a normal function or a arrow function as a call back function.
//when writing the call back function we do not need to write its name


// using normal function
arr.forEach(function(val){
    //console.log(val)
})

// using call back function
arr.forEach((val)=>{
    //console.log(val)
})

// writing a seprate function the passing its referenve the forEach loop
function printMe(value){
    //console.log(value)
}
arr.forEach(printMe)// here we are only passing the reference

// Most imp
// for each ke call back function me apke pass 3 formal parameters ki access hoti hai
//1) value of each item
//2) index of each item
//3) and access of full array in each iteration

arr.forEach((value,index,array)=>{
    //console.log(value,index,array)
})
//Output:
// om 0 [ 'om', 'shiv', 'harshit', 'madhav' ]
// shiv 1 [ 'om', 'shiv', 'harshit', 'madhav' ]
// harshit 2 [ 'om', 'shiv', 'harshit', 'madhav' ]
// madhav 3 [ 'om', 'shiv', 'harshit', 'madhav' ]

// for each loop on array whose each element is an object
const myCoding=[
    {
        langName:"javascript",
        extension:"js"
    },
    {
        langName:"java",
        extension:"java"
    },
    {
        langName:"python",
        extension:"py"
    }
]
myCoding.forEach((item)=>{
   console.log(item.langName)
})