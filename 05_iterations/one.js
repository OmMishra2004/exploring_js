// for loop
// console.log("The numbers from 1 to 10 are:")
// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     console.log(element)
// }


// break statement

// for (let i = 1; i < 11; i++) {
//     const element = i;
//     if (i==5) {
//         console.log(`${i} detected`)
//         break
//     }
//     console.log(i)
// }


// // continue statement

// for (let i = 1; i < 11; i++) {
//     const element = i;
//     if (i==5) {
//         console.log(`${i} detected`)
//         continue
//     }
//     console.log(i)
// }

console.log("Break statement")
for (let i = 1; i < 4; i++) {
    if (i == 2) {
        break
    }
    for (let j = 1; j < 4; j++) {
        console.log(`Value of i = ${i} , Value of j = ${j}`)
    }
}

console.log("Continue statement")
for (let i = 1; i < 4; i++) {
    if (i == 2) {
        continue
    }
    for (let j = 1; j < 4; j++) {
        console.log(`Value of i = ${i} , Value of j = ${j}`)
    }
}