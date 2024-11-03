// let fruits = ["apple", "banana", "strawberry"];

// let numbers = [4, 89, 1, 24]


// function comparison(a, b) {
//     if (a > b) {
//         return 1
//     } else if (a === b) {
//         return 0
//     } else {
//         return -1
//     }
// }

// const sortedNumbers = numbers.sort(comparison)
// console.log(sortedNumbers)



function compareObjects(a, b) {
    if (a.price > b.price) {
        return 1
    } else if (a.price === b.price) {
        return 0
    } else {
        return -1
    }
}

let objects = [{ price: 20, name: "T-Shirt"}, { price: 15, name: "CD"}]

console.log(objects.sort(compareObjects))
















// fruits = fruits.map(function(item){
//     return item.toUpperCase()
// })
// console.log(fruits)

// fruits = fruits.filter(function(fruit, index){
//     return index === 3
// })

// console.log(fruits)


// function printFruit(fruit, index) {
//     console.log(fruit + " is at "+ index)
// }


// pop removes an element
// let removed = fruits.pop()
// console.log(fruits)


// // push adds an element
// fruits.push("watermelon")
// console.log(fruits)

// join makes a string out of the array
// and takes an optional parameter as a separator
// let joinedFruits = fruits.join(" REDI ")
// console.log(joinedFruits)

// // concat merges two arrays into one
// let veggies = ["pepper", "broccoli", "celery"];

// const fruitsAndVeggies = fruits.concat(veggies)
// console.log(fruitsAndVeggies)