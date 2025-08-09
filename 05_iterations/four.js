const myobj={1:"a",2:"b",3:"c"}
// for objects we use forin loop
// for in loop gives keys
for (const key in myobj) {
  //  console.log(`key =${key}, value =${myobj[key]}`)
}

//for in loop on arrays gives the keys of array and keys of array are the indexes of the array
const arr=["hello","om"]
for (const key in arr) {
    //console.log(key,arr[key])
}



// for in loop does not work on maps
// const map1= new Map()
// map1.set(1,"a")
// map1.set(2,"b")
// map1.set(3,"c")
// for (const [key,value] in map1) {
//     console.log(key,value)
// }