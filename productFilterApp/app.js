class Product {
    constructor(name, price, category) {
        this.name = name
        this.price = price
        this.category = category
    }
}

let products = []
function addProduct(product) {
    products = [...products, product]
}
function filterProducts(minPrice, maxPrice, category) {
    let filters = products
    filters = filters.filter(product => product.price >= minPrice)
    filters = filters.filter(product => product.price <= maxPrice)
    filters = filters.filter(product => product.category == category)
    return filters
}

addProduct(new Product("Product 1", 20, "Category 1"))
addProduct(new Product("Product 2", 100, "Category 2"))
addProduct(new Product("Product 33", 30, "Category 31"))
addProduct(new Product("Product 4", 55, "Category 4"))
addProduct(new Product("Product 5", 67, "Category 6"))
addProduct(new Product("Product 67", 180, "Category 7"))
addProduct(new Product("Product 8", 22, "Category 8"))
addProduct(new Product("Product 8", 15, "Category 5"))
addProduct(new Product("Product 9", 1, "Category 5"))
const filt = filterProducts(10, 100, 'Category 5')
filt.forEach(element => {
    console.log(element)
});