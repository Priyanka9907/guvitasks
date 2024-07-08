class circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    circle(){
        return this.radius;
    }
    circle(radius){
        return this.radius * this.radius;
    }
    circle(radius,color){
        return this.radius * this.color;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        console.log("Radius", "=", this.radius);
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        console.log("color", "=", this.color)
    }
    toString(){
        return this.color;
    }
    getArea(){
        return 3.14*this.radius*this.radius;
    }
    getCircumference(){
        return 2 * 3.14 * this.radius;
    }
}
const shape = new circle(10,"red")
console.log("Radius", "=",shape.getRadius(), "Circle","=",shape.getColor());

/**
 * Output:

Radius = 10 Circle = red
 */