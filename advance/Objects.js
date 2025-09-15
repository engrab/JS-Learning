function createUser(username, age){
    this.username = username
    this.age = age
}
createUser.prototype.increment = function(){
    this.age++
}

const user = new createUser("Bilawal", 26)
user.increment()
console.log(user.age)