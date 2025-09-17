function user(email, password){

    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        set: function(value){
            this._email = value
        },
        get: function(){
            return this._email.toUpperCase()
        }
    })

    
}

const u1 = new user("user1@gmail.com", "pas123")
// ap email aur _email dono access kr skty hn. 
// _email 1 private field h . isy sirf class k andr access hona chahye
// mery lihaz se outside of class access denied hona chahye tha
console.log(u1.email)
console.log(u1._email)