function outerFun(){
    let outerVar = "I am outside!";
    function innerFun(){
        console.log(`Accessible in: ${outerVar}`)
    }
    console.log(outerVar)
    innerFun()
}
outerFun()

// lexical scoping mean outer variable can be accessible in inner function