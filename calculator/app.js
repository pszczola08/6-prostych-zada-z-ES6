class Calculator {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    add() {
        return this.a + this.b
    }
    substract() {
        return this.a - this.b
    }
    multiply() {
        return this.a * this.b
    }
    divide() {
        return this.a / this.b
    }
}

let numbers = [9, 8]
const [a, b] = numbers
const math = new Calculator(a, b)
console.log(`9 + 8 = ${math.add()}`)
console.log(`9 - 8 = ${math.substract()}`)
console.log(`9 * 8 = ${math.multiply()}`)
console.log(`9 / 8 = ${math.divide()}`)