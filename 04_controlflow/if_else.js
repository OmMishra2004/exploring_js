// normal or explicit syntax of if
// if (2!=3) {
//     console.log("executed");
// }
// // implicit or shorthand syntax of if
// const balance=100
// if (balance>500) console.log("balance is greater than 500");// one liner

// nesting of if else
const bal=1000
if (bal<500) {
    console.log("greater than 500")
}else if (bal<750) {
    console.log("greater than 750")
}else{
    console.log("the balance is greater than both 500 and 750")
}

// checking multiple conditions using &&(and) , ||(or) operators
if (2==2 && 2!=3) {
    console.log("using &&(and) operator")
}
if (2==2 || 2==3) {
    console.log("using ||(or) operator")
}