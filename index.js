// API = "https://fakestoreapi.com/products"
// API = "https://fakestoreapi.com/products/id"


const productListElement = document.querySelector(".product__list")

async function main(){
    const products = await fetch("https://fakestoreapi.com/products")
    const productsData = await products.json()
    productListElement.innerHTML = productsData.map( (product) => productsHTML(product)).join("")
}

main()


function productsHTML(product){
 return `<div class="product__card">
 <figure class="product__img--container">
   <img class="product__img" src="${product.image}" alt=""/>
 </figure>
 <div class="product__details">
   <h2 class="product__title">${product.title}</h2>
   <h3 class="product__price">$${product.price}</h3>
 </div>
</div>`
}