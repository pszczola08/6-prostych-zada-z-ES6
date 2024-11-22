class Test {
    constructor(name, percentage) {
        this.name = name
        this.percentage = percentage
    }
}

let tests = []
function addTestResult(name, score) {
    tests = [...tests, new Test(name, score)]
}
function getLowestGrade() {
    let lowest = 101
    tests.forEach(score => {
        if(score.percentage < lowest) {
            lowest = score.percentage
        }
    });

    if(lowest == 101) {
        return null
    } else {
        return lowest
    }
}
function getHighestGrade() {
    let highest = -1
    tests.forEach(score => {
        if(score.percentage > highest) {
            highest = score.percentage
        }
    });

    if(highest == -1) {
        return null
    } else {
        return highest
    }
}
function getAverageGrade() {
    let sum = 0
    tests.forEach(element => {
        let score = element.percentage
        sum += score
    });

    return Math.round(sum / tests.length)
}

addTestResult("Student 1", 60)
addTestResult("Student 2", 56)
addTestResult("Student 3", 78)
addTestResult("Student 4", 95)
addTestResult("Student 5", 23)
addTestResult("Student 6", 15)
addTestResult("Student 7", 36)
addTestResult("Student 8", 90)
addTestResult("Student 9", 78)
addTestResult("Student 0", 84)
console.log(`Najnisza ocena: ${getLowestGrade()}%`)
console.log(`Najwyższa ocena: ${getHighestGrade()}%`)
console.log(`Średnia ocena: ${getAverageGrade()}%`)