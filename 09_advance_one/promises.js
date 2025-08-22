// Syntax 1
// const promiseOne= new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('task completed after 1 sec')
//         resolve()
//     }, 1000);
// })
// promiseOne.then(function(){
//     console.log("Promise consumed")
// })
//Syntax 2
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise two")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise two resolved")
// })
// Promise 3
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise three")
//         resolve({username:'Om Mishra',age:21})
//     },1000)
// }).then(function(user){
//     console.log("Promise three resolved",user)
// })
// Promise 4
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise four")
//         let error= false
//         if (!error) {
//             resolve({username:'Om Mishra',age:21})
            
//         } else {
//             reject('Error occured')
//         }
//     },1000)
// }).then(function(user){
//     console.log("Promise four resolved",user)
//     return user.username
// }).then(function(username){
//     console.log(`The username is ${username}`)
// }).catch(function(user){
//     console.log(user)
// }).finally(()=>console.log("the promise is either resolved or rejected"))

// Promise 5
const Promise_Five=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise Five")
        let error= true
        if (!error) {
            resolve({username:'Om Mishra',age:21})
            
        } else {
            reject('Error occured')
        }
    },1000)
})
async function promisefive() {
    try {
        const response=await Promise_Five
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
promisefive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
