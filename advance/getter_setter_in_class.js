class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    // Remember in getter and setter always mension variable with underscore (_) 
    set email(value){
        this._email = value
    }
    get email(){
        return this._email.toUpperCase()
    }
}

const user = new User("abc@gmail.com", "pass123")
// ap email aur _email dono access kr skty hn. 
// _email 1 private field h . isy sirf class k andr access hona chahye
// mery lihaz se outside of class access denied hona chahye tha
console.log(user.email)
console.log(user._email)