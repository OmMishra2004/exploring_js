function login(username){
    // in js an empty string "" and a undefined value are considered to be false
    if(!username)// hence here when the username is has undefined value or an empty string that is false the ! symbol converts that to true value hence the if part gets executed.
    {
        return `Please enter a username`
    }
    else{
        return`${username} just logged In`
    }
}
console.log(login("Om"))//Output:Om just logged In
console.log(login(""))//Output:Please enter a username
console.log(login())//Output:Please enter a username

// if(false){
//     console.log("A")
// }
// else{console.log("B");}

function login1(username="Someone"){// but here when there is no vlaue passed while calling the function instead of taking the undefined value it will take the default value given here as "Someone".
    // in js an empty string "" and a undefined value are considered to be false
    if(!username)// hence here when the username is a empty string "" that is false the ! symbol converts that to true value hence the if part gets executed.
    {
        return `Please enter a username`
    }
    else{
        return`${username} just logged In`
    }
}
console.log(login1("Om"))// Output:Om just logged In
console.log(login1(""))// Output:Please enter a username
console.log(login1())// Output:Someone just logged In