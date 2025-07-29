// const score=500;// here js automatically understands that a number is given 
// const count= new Number(400)//here we explicitly define that this is a number
// console.log(score,count);
// console.log(score.toString().length);
// console.log(score.toString().concat("hello"));

// const a=100.5265475
// console.log(a.toFixed(2));// Output:100.53
// console.log(a.toFixed(1));// Output:100.5
// console.log(a.toFixed(0));// Output:101
// console.log(a.toFixed(-1)); not applicable 


// const b=123.5698
// console.log(b.toPrecision(4))// Output:123.6
// console.log(b.toPrecision(3))// Output:124
// console.log(b.toPrecision(2))// Output:1.2e+2

// const f=1000001
// console.log(f.toLocaleString("en-IN"));// put commas according to indian number system

/////////////////////////////////////Maths//////////////////////////////////////////
// console.log(Math.abs(-4));// gives the aboslute value by removing the sign 
// console.log(Math.round(4.6));// rounds up the value
// console.log(Math.ceil(4.6));// agar 4 se .1 bhi jyada hua to value 5 dega
// console.log(Math.floor(4.6));// agar 4 se .9 bhi jyada hua to bhi value 4 hi dega
// console.log(Math.max(4,9,2,6));
// console.log(Math.min(4,9,2,6));

// imp fromula to get a random number between two numbers including the min and max number 

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)

