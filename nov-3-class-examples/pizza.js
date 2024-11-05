
const pizzaOrder = new Promise((resolve, reject) => {
    setTimeout(() => { // Simulation of an asynchronous action
        let everythingOk = true
        if (everythingOk) {
            return resolve("Pizza was delivered!")
        } else {
            return reject("Oh no, no pizza today")
        }
    }, 3000);
})

pizzaOrder
.then((resolvedValue) => {
    console.log(resolvedValue)
})
.catch((rejectedValue) => {
    console.log(rejectedValue)
})
console.log('I ordered a pizza!')