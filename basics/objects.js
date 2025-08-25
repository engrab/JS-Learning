// singleton object
const singletonObject = new Object()

// This is lieteral object 
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

// nested object
const nestObject = {
    username: {
        fullname:{
            firstname: "Bilawal",
            lastname: "Hussain"
        }
    }
}
console.log(nestObject.username.fullname.firstname);

const joinObject = {...jsUser, ...nestObject}
console.log(joinObject);
console.log(joinObject.username.fullname.lastname);

// de structure of object

const {name: n} = jsUser
console.log(n);
console.log(n);
console.log(n);
console.log(n);




