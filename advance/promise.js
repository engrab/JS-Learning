const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise one executed")
        resolve()
    }, 1000);
})

promiseOne.then()

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promoise two executed")
        resolve()
    }, 1000);
}).then((resolve) => {
    console.log(resolve)
})

const promiseThree = new Promise((resolve, reject) => {
    let error = true;
    if(!error){
        resolve("this is resolve three")
    }else{
        reject("some thing went wrong")
    }
})
promiseThree.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log("This is Four prmoise")
    }, 1000)
})


async function consumePromiseFour() {
    try {
        const cnsPromiseFour = await promiseFour
        console.log(cnsPromiseFour)
    } catch (error) {
        console.log(error)
    }
}





consumePromiseFour()