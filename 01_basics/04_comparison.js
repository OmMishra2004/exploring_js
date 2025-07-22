// console.log(2<=1)=>false

// in js equality check == and all other comparison operator work differently 
// other comparison operators like >=,<= convert null into 0 
// but == do not convert null into 0
// console.log(null>0)//=>false 
// console.log(null==0)//=>false
// console.log(null>=0)//=>true
 
// when we compare the undefined then in all cases the value is false

console.log("2"==2)// here output is true because it convert the stirng into number then checks for equality
console.log("2"===2)// here the output is false because no conversion is allowed and the output will be true only when the value as well as data type is same.