class Area {
    static PI = Math.PI

    static getArea(radius){
        let result = this.PI * (radius**2)
        return result.toFixed(2)
    }
}

console.log(Area.getArea(5))