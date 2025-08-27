function addTwoNumber(number1, number2){

    return number1+number2
}

console.log(addTwoNumber(5,5))

const myArr = [5,6,9,8,7,1]

function addArr(arr){
    console.log(arr);
    
}
addArr(myArr)

const myObj = {
    name: "Bilawal",
    age: 25,
    country: "Pakistan"
}

function objFun(obj){
    console.log(`My name is ${obj.name} and my age is ${obj.age} and i live in ${obj.country}`)
    
}

objFun(myObj)

// spread operator
function calculate(val, val2, ...number){
    console.log(number);
}

calculate(5,6,7,8,9)