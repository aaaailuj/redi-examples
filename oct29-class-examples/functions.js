export function calculateAverage(items, callback) {
  let sum = 0;
  for (const item of items) {
    sum += item.price;
  }
  return callback(sum, items.length);
}

export function divide(a, b) {
  return a / b 
}





const items = [
  {name: "Banana", price: 0.89},
  {name: "Broccoli", price: 1.49}
]



const average = calculateAverage(items, divide)
console.log(average)