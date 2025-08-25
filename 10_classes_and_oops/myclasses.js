// Classes


// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     encryptedPassword(){
//         return `${this.password}abc`
//     }

//     capital(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const user1=new User("om","om@gmail.com",123)
// console.log(user1)
// console.log(user1.capital())
// console.log(user1.encryptedPassword())

// yahi chiz agar hame class ke bina karni hoti to hamlog jo pehle tarika padha tha wo lagate

function User(username,email,password) {
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptedPassword=function (){
        return `${this.password}abc`
    }
User.prototype.capital=function (){
        return `${this.username.toUpperCase()}`
    }
const user1=new User("om","om@gmail.com",123)
console.log(user1)
console.log(user1.capital())
console.log(user1.encryptedPassword())