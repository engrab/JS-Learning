// This is symbol 
const mySym = Symbol("Developer")
// This is object
const jsUser = {
    name: "bilawal",
    age: 30,
    city: "Muzaffargarh", 
    email: "bilawal@gmail.com",
    [mySym] : "Android Developer"
}

console.log(jsUser);
console.log(jsUser["name"]);
console.log(jsUser.email);
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])


