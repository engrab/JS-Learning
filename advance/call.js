function setUsername(username){
    this.username = username
}

function createUser(username, age, email){
    // exaplicitly binding the function with call
    setUsername.call(this, username)
    this.age = age
    this.email = email
}

const user1 = new createUser("Bilawal", 22, "bilawal@google.com")
console.log(user1)