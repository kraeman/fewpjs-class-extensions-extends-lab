// Your code here
class Polygon {
    constructor(arrayOfIntegers) {
        this.arrayOfIntegers = arrayOfIntegers
    }

    get countSides() {
        return this.arrayOfIntegers.length
    }

    get perimeter() {
        let counter = 0
        this.arrayOfIntegers.forEach(int => {
            counter += int
        })
        return counter
    }

}

class Triangle extends Polygon {
    get isValid() {
        const side1 = this.arrayOfIntegers[0]
        const side2 = this.arrayOfIntegers[1]
        const side3 = this.arrayOfIntegers[2]

        if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
            return true
        }
        return false
    }
}

class Square extends Polygon {
    get isValid() {
        const side1 = this.arrayOfIntegers[0]
        const side2 = this.arrayOfIntegers[1]
        const side3 = this.arrayOfIntegers[2]
        const side4 = this.arrayOfIntegers[3]

        if (side1 == side2 && side2 == side3 && side3 == side4) {
            return true
        }
        return false
    }

    get area() {
        const side = this.arrayOfIntegers[0]
        const a = side**2
        return a
    }
}