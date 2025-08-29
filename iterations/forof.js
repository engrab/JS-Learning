// arr
const arr = ["js","html","kt","java"]

for (const key of arr) {
    console.log(key);
    
}

for (const [key, value] of arr) {
    console.log(`key is ${key} and value is ${value}`);
    
}

// object
const myObj = {
    name: "Bilawal",
    age: 26,
    city: "Muzaffargarh"
}

for (const element of myObj) {
    console.log(`My name is ${element} `);
    
}