function userdetails(username,loginCount,isLoggedIn) {
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this
}
const userOne=userdetails("Om",10,true)
console.log(userOne)