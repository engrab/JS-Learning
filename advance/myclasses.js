class User{
    constructor(username, email){
        this.username = username
        this.email = email
    }
    logMe(){
        console.log(`UserName: ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, makeVideo){
        super(username, email)
        this.makeVideo = makeVideo
        
    }

    createContent(){
        console.log(`Teacher can create content`);
        // password()
    }

    // static make it private it can not access
    static password(){
        console.log(`Teacher can not expose theri password`)
    }
}

const eliya = new Teacher("Eliya", "eliya@google.com", true)
console.log(eliya)
// eliya.password() --> static field can not access from object
// eliya.createContent() --> even member class function can not access static function
Teacher.password() // static function can access from class name
