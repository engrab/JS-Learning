// Stack (primitive data type) number, boolean, String, bigInt, 
// copy of value
let score = 55
let result = score
score = 60
console.log(score);
console.log(result);


// Heap (Non primitive data type) Array, List etc....
// reference pass
// array
let fruite = ["apple", "mango", "banana"]
let summerFruite = fruite
fruite[3] = "Graps"
console.log(fruite);
console.log(summerFruite);
// object
let person = {
    name: "Bilawal",
    age: "25",
    city: "Khangarh"

};
console.log(person.age);
console.log(person["city"] = "Pakistan");
console.log(person);




