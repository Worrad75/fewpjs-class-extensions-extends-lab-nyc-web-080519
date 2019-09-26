class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce(function (acc, val) {
            return acc + val
        })
    }

    // var totalYears = pilots.reduce(function (accumulator, pilot) {
    //     return accumulator + pilot.years;
    // }, 0);

}


class Triangle extends Polygon {

    get isValid() {
        if (!Array.isArray(this.sides)) {
            return;
        } else {
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        }
    }
}


class Square extends Polygon {

    get isValid() {
        if (!Array.isArray(this.sides)) {
            return;
        } else {
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            let side4 = this.sides[3]
            return ((side1 === side2) && (side1 === side3) && (side1 === side4))
        }
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }
}