
const pizzaOrder = new Promise((resolve, reject) => {
    setTimeout(() => { // Simulation of an asynchronous action
        let everythingOk = false
        if (everythingOk === true) {
            return resolve("Pizza was delivered!")
        } else {
            return reject("Oh no, no pizza today")
        }
    }, 3000); // waits 3 seconds
})

pizzaOrder.then((resolvedValue) => {
    console.log(resolvedValue)
})
.catch((rejectedValue) => {
    console.log(rejectedValue)
})

console.log('I ordered a pizza!')