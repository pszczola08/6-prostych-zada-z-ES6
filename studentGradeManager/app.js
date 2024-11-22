class Student {
    constructor(name, age, grades) {
        this.name = name
        this.age = age
        this.grades = grades
    }

    addGarde(newGrade) {
        this.grades = [...this.grades, newGrade]
    }
    getAverage() {
        let grades = this.grades
        return grades.reduce((a, b) => a + b) / grades.length
    }
}

let grades = [1, 6, 3, 4, 3]
const student1 = new Student('Uczen', 16, grades)
console.log(student1.getAverage())
student1.addGarde(6)
student1.addGarde(1)
console.log(student1.getAverage())