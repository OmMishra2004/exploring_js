// let mydate= new Date()// date is an object in js
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())

// let myCreatedDate= new Date(2025,6,31)// point to remember month start from 0 in js that is 0 stands for jan month
// console.log(myCreatedDate.toDateString());
// let newdate= new Date("07-31-2025")
// console.log(newdate.toLocaleDateString());
// let newdate= new Date("31-07-2025")// this format is invalid
// console.log(newdate.toLocaleDateString());

let mytime1= Date.now()// this gives you total milliseconds from 1 Jan 1970 till the current execution time
console.log(mytime1)
let mydate= new Date("07-31-2025")
console.log(mydate.getTime())// This will give you the total milliseconds from 1 Jan 1970 till the date and time specified.
console.log(Math.floor(Date.now()/1000))// this how we convert the milliseconds into seconds and we are using Math.floor to get the lower limit value and remove the decimal values instead of Math.floor we can also use Math.round()

let date= new Date("07-30-2025")
console.log(date.toLocaleString("default",{
    weekday:"long",
    month:"long"
}))
