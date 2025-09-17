const user = {
    _email: "abc@email.com",
    _password: "pass123",
    set email(value){
        this._email = value
    },
    get email(){
        return this._email.toUpperCase()
    }
}

// create object from another object
 const u1 =  Object.create(user) 
 console.log(u1._password)

// ap email aur _email dono access kr skty hn. 
// _email 1 private field h . isy sirf class k andr access hona chahye
// mery lihaz se outside of class access denied hona chahye tha
console.log(user.email)
console.log(user._email)