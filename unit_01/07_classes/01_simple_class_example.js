class Rectangle{
    
    constructor(_width , _height , _color){
        this.width = _width;
        this.height = _height;
        this.color = _color;
        console.log("A new Rectangle created....");
    }
    getArea(){
        return this.width * this.height ;
    }
    printRectangleDetails(){
        console.log(`Rectangle width : ${this.width}
            Rectangle height : ${this.height}
            Rectangle color : ${this.color} `);
    }
}

const newRectangle = new Rectangle(10 , 5 , "Red");
console.log(newRectangle.getArea());
console.log(newRectangle.printRectangleDetails());

const newRectangle2 = new Rectangle(12 , 8 , "Green");
console.log(newRectangle2.getArea());
console.log(newRectangle2.printRectangleDetails());