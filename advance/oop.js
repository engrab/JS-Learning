// object literals
const user = {
    username: "Bilawal",
    age: 26,
    isLogedIn: false,
    greeting: function(){
        console.log(`wellcome to ${this.username}`)
    }
}

console.log(user.username)
console.log(user.greeting())
console.log(this.user)

// constructor function 
function userTwo(username, age, isLogedIn){

    this.username = username
    this.age = age
    this.isLogedIn = isLogedIn
    console.log(this)
}

const objTwo = new userTwo("Eliya", 5, true)
console.log(objTwo.username)
