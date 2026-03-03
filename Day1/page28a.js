const products = [
    { id: 1, name: "product1", price: 200 },
    { id: 2, name: "product2", price: 300 },
    { id: 3, name: "product3", price: 400 },
]
products.forEach((product) => {
    console.log(product);
})

let newArray = [];

//filtering the products whose price is greater than 250
function filterProducts(products, p) {
    newArray = products.filter((product) => product.price > p)
    console.log(newArray);
}

//adding product 2 to new cart array using spread operator with a new key quantity and assign quantity 1

let carts = []

function addProductToCart(products, id) {
    p1 = products.find(p=>p.id===id)
    let existsPro = carts.find(p=>p.id===p1.id)
    if(existsPro){
        existsPro.quantity++
        return
    }
    carts = [...carts, {...p1, quantity: 1}]
}



filterProducts(products, 250)
 addProductToCart(products, 2)
addProductToCart(products, 2)
console.log(carts)