// const name = "om"// here the name is acting as a string datatype
// const count = 10
// console.log(name+count+"done")
// console.log(`Hello my name is ${name} and my repo count is ${count}`);// here the backtick syntax is used backticks simply create placeholders where you can directly in inject your value of variables using the variable name.This is called string interpolation
// console.log(typeof name)

// another way of declaring a string
const a= new String('Ommishra')// here the string is acting as an object with key value pair. This is a better way of declaring string because it allows us to use various operations on the strings using prototyping methods
// console.log(a,typeof a);
// console.log(a[0], a.toUpperCase());
// console.log(a.charAt(3));
// console.log(a.indexOf("m"));
// console.log(a.substring(0,4));// we cannot use negative indexes in substring method
// console.log(a.slice(-4,-1))// but we can use negative indexing in slice method
// console.log(a.slice(-4,-3))

// some more methods
const f= "   hello         -world "
// console.log(f)
// console.log(f.trim())// removes the strarting and end spaces from the strings
// console.log(f.replace("lo",20));
// console.log(f.includes("ell"))
// console.log(f.split("-"));

// const g="hello world"
// console.log(g.replace("l","j"));
// console.log(g.replaceAll("l","j"));
const poem = `Roses are red,
Violets are blue,
Sugar is sweet,
And so are you.`;

console.log(poem);








