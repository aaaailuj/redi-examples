// Declaring variables using let and const
const someNumbers = [1,2,3]
someNumbers = [4, 5, 6] // will give an error


let myString
console.log(myString) // undefined


let myArray = ["Apples", "Bananas", "Pizza", "Cake"]

for(let i = 0; i < myArray.length; i++) {
    console.log(`Value of i: ${i}, Array element: ${myArray[i]}`)
}

let i = 0
while(i < 5) {
    console.log(i)
    i++
}


const dog = {
    name: 'Fido',
    age: 5,
    color: 'brown'
}
console.log(dog.name)
console.log(dog['age'])