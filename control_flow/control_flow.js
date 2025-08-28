// +++++++++++++++++++++++++ IF ELSE +++++++++++++++++++++++++++++++++++++
const isLogedIn = true

if (isLogedIn) {
    console.log("User is logedin");
}else{
    console.log("user need to logedin");
}

// < less than
// > greater than
// <= Less than Equal to
// >= greater than equal to
// == equal to
// != not equal to
// ==== equal to but also check types

// if(condition){
//     console.log("if condition is true");
    
// }else{
//     console.log("if condition is false");
    
// }

// if(condition) console.log("same line"), console.log("seprate with , multiple line but its bad practice");

const debitCard = true

if (debitCard && isLogedIn){ 
    // && need all condition to true
    console.log("you can purchase it");  
    
} else {
    console.log("you need to logedin and enter your debit card detail");
    
}

// by using || AND operator any one condition will true other condtion is not check
if (isLogedIn || debitCard) {
    console.log("User is logedin");
    
} else {
    console.log("you can not purchase please login");
    
}


// +++++++++++++++++++++ SWITCH CASE ++++++++++++++++++++++++++++++++

// agr hmary pass zeyda value a jaen kis bnyad p check krna ho to hmm switch ka use krty hn

// switch (key) {
//     case value:
//         console.log("key is equal to value key == value");
        
//         break;

//     case value1:
//         console.log("key is equal to value1 key == value1");
        
//         break

//     default:
//         break;
// }

const month = "march"
switch (month) {
    case "january":
        console.log("Month is January");
        
        break;
    case "Febuary":
        console.log("Month is Febuary");
        
        break;
    case "March":
        console.log("Month is March");
        
        break;
    case "April":
        console.log("Month is April");
        
        break;

    default:
        console.log("Other than first 4 Months")
        break;
}

// +++++++++++++++++++++++ TRUTHY VALUE ++++++++++++++++++++++++++++++++

// false values

// false, 0, -0, BigInt 0n , "", null , undefined, NAN

// true value
// {}, [], "0", 'false', " ", function(){}

const userEmail = []

if(userEmail.length === 0){
    console.log("empty user email");
    
}

const emptyObj ={}

if (Object.keys(emptyObj).length === 0) {
    console.log("empty object is here");
    
}

// +++++++++++++++++++++++++++ Nullish Coalescing Operator (??): null undefined +++++++++++++++

// agr value m koi aur value assign na howi to null assign ho jaye ga.
// 10 wali jaga p hmm koi function call kren gy jahan kuch value aye ge agr us m value ni ati to is ko null assign ho jaye ga is operator ka sirf yahe kam h.
const value = null ?? 10
console.log(value);

// ++++++++++++++ Terniary Operator ++++++++++++++++++++++++

// condition ? true : false

const teaPrice = 100
teaPrice < 80 ? console.log("tea price is less than 80") : console.log("tea price is greater that 80")



