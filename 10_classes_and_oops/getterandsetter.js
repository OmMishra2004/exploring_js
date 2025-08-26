class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        return `${this._password}om`
    }
    set password(value){
        this._password=value
    }
}
const user1=new User("om@gmail.com",123)
// console.log(this)
console.log(user1.password)

// old way to do the above thing without using classes

function Users(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new Users("chai@chai.com", "chai")

console.log(chai.email);

// Another method of doing the same thing using objects
const User3 = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User3)
console.log(tea.email);