
// Normal Function
// Is type ki function declaration me function ko define karne se pehle bhi call kar sakte ho (hoisting).
function addNum(num1, num2){
    return num1 + num2
}
console.log("Normal Function");
console.log(addNum(5,6));


// Function Expression
// Function ko variable me store kiya ja sakta hai. 
// Is case me function ko declaration ke baad hi call karna padega, warna error aayega.
const addition = function(num1, num2){
    return num1 + num2
}
console.log("Function stored in variable");
console.log(addition(2,3));


// Arrow Function (Explicit Return)
// Agar {} braces use karte ho to `return` likhna zaroori hai.
const add = (num1, num2) => {
    return num1 + num2
}
console.log("Arrow Function with explicit return");
console.log(add(7,8));


// Arrow Function (Implicit Return)
// Agar () use karte ho to return likhne ki zaroorat nahi.
const addNumber = (num1, num2) => (num1 + num2)
console.log("Arrow Function with implicit return");
console.log(addNumber(4,5));


// Arrow Function (Single Expression without Parentheses)
// Agar ek hi expression hai to bina () aur bina return ke likh sakte ho.
const funWithoutPra = (num1, num2) => num1 + num2
console.log("Arrow Function without parentheses");
console.log(funWithoutPra(7,8));
