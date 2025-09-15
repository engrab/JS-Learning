// how we can inject function in Array

let myHero = ["spiderman", "thor"]


Array.prototype.printMe = function(){
    console.log("Spiderman is greate")
}


Object.prototype.printMe = function(){
    console.log("Spiderman is greate")
}


const myH = "Thor"
console.log(myHero.printMe())
console.log(myH.printMe())


// Inheritance
const user ={
    username: "Bilawal",
}
const teacher = {
    makeVideo: true
}

// teacher.__proto__ = user // old way
// new way
Object.setPrototypeOf(teacher, user)
console.log(teacher.username)