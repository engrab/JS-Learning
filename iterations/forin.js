// array
const arr = ["javascript", "cpp", "java", "kotlin", "html"]

for (const key in arr) {
    // console.log(`key ${key} its value ${arr[key]}`);
    
}

// object
const myObj = {
    js: "javascript",
    cpp: "Cpp",
    java: "Java",
    kt: "Kotlin",
    html: "HTML"
}

for (const key in myObj) {
//    console.log(key);
   
}

for (const key in myObj) {
//    console.log(`key is ${key} and value is ${myObj[key]}`);
   
}

// Map --- map is not iterateable
const map = new Map()
map.set("js", "javascript")
map.set("cpp", "Cpp")
map.set("java", "Java")
map.set("kt", "Kotlin")
map.set("html", "HTML")

for (const key in map) {
    console.log(key);
    
}
