
const products = [
  {
    id: 1,
    name: "Forrest Gump",
    price: "$9.99",
    description: "Tom Hanks is great in this one",
    image: "http://is1.mzstatic.com/image/thumb/Video2/v4/9e/be/cd/9ebecd7b-3e70-be67-5028-951773725e14/source/2000x3000sr.jpg",
  },
  {
    id: 2,
    name: "Spiderman",
    price: "$9.99",
    description: "",
    image: "https://pngimg.com/uploads/spider_man/spider_man_PNG11.png",
  },
]

function addProducts() {
  const container = document.getElementById("product-container")
  
  for (let product of products) {
    const listItem = document.createElement('li')
    listItem.className = "product"
    listItem.innerHTML = `
    <div class="product card">
      <image src=${product.image} alt=${product.name} class="product--image">
      <div class="product--text">
        <h1 class="product--name">${product.name}</h1>
        <p>${product.price}</p>
        <button class="product--buy">Add to Cart</button>
      </div>
    </div>`
    container.appendChild(listItem)
  }
}
document.addEventListener("DOMContentLoaded", addProducts)