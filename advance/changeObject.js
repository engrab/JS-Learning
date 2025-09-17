const user = {
    name: "Bilawal",
    email: "bilawal@google.com",

}
// get property of object
console.log(Object.getOwnPropertyDescriptor(user, "name"))
// define property of object
Object.defineProperty(user, "name", {
    writable : false
})

console.log(Object.getOwnPropertyDescriptor(user, "name"))

console.log(user.name = "Eliya")
console.log(user)