let a="20"
let num1=Number(a)
// console.log("before converting")
// console.table([a,typeof a])
// console.log("after converting")
// console.table([num1,typeof num1])

let b="20abc"
let num2=Number(b)
// console.log("before converting")
// console.table([b,typeof b])
// console.log("after converting")
// console.table([num2,typeof num2])// "20abc" cannot be converted into number but when we forcibly convert it into number then it is converted into NaN(not a number) value and type of NaN is number only.

//"20"=>20
//"20abc"=>NaN
//null => 0
//undefined=>NaN
//true => 1
//false => 0

let c= "asd"
let booleanc= Boolean(c)
// console.log(booleanc);

// 1=>true
// 0=>false
// "abc"=>true
// ""=>false

// Other conversions can also be done 

//************ Operations ************
// let d="1"+2
// console.log(d,typeof d)// => 12 string
// let e=1+"2"
// console.log(e,typeof e);// => 12 string
// console.log("1"+2+3,typeof ("1"+2+3))//=> 123 string 
// console.log(1+2+"3",typeof (1+2+"3"))//=>33 string
// console.log(+true)//=>1
// console.log(+"")//=>0

let count1=100
let x=5+(++count1)//106
console.log("count1 = ",count1)
console.log(x)
let count2=100
let y=5+(count2++)//105
console.log("count2 = ",count2)
console.log(y)