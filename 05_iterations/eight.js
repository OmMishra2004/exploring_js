const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

let arr1=[1,2,3]
let newarr=arr1.reduce((accumulator,currentVlaue)=>(accumulator+currentVlaue),0)
// console.log(newarr)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const total=[]
const totalShoppingCart=shoppingCart.forEach((item)=>{total.push(item.price)})
console.log(total.reduce((acc,currval)=>acc+currval,0))

// directley using reduce 
const pricetopay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(`Total price: ${pricetopay}`)