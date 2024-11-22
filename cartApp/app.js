class Cart {
    constructor() {
        this.products = []
    }

    addProduct(name, price, quantity) {
        this.products = [...this.products, [name, price, quantity]]
    }
    removeProduct(name) {
        let prod = this.products
        this.products = prod.filter(product => product[0] != name)
    }
    showCart() {
        this.products.forEach(element => {
            let [name, price, quantity] = element
            console.log(`${quantity} * ${name} for ${price * quantity}zł`)
        });
    }
}

let cart = new Cart()
cart.addProduct("Prod1", 3, 5)
cart.addProduct("Prod2", 4, 6)
cart.addProduct("Prod3", 3, 7)
cart.addProduct("Prod4", 2, 5)
cart.addProduct("Prod5", 1, 5)
cart.addProduct("Prod6", 3, 8)
cart.addProduct("Prod7", 2, 5)
cart.removeProduct("Prod7")
cart.addProduct("Prod8", 2, 2)
cart.addProduct("Prod9", 3, 5)
cart.removeProduct("Prod2")
cart.showCart()