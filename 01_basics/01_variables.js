const accountId = 123// used to define constants
let accountEmail = "om@gmail.com"// used to define a variable
var accountPassword = "12345"// do not use var because it has issues in block scope and functional scope
accountCity = "Farrukhabad"// avoid this as well only use let or const
let accountState// we can also declare a variable without giving it a value then javascript will consider its value to be undefined.
console.log("before changing");
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
console.log("after changing");
// accountId = 123// this is not allowed because we cannot change the variable which is set to be constant.
accountEmail = "shiv@gmail.com"
accountPassword = "34500"
accountCity = "delhi"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
