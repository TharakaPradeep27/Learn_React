class Square{
    constructor(width){
        this.width = width;
        this.height= width;
    }

    getArea(){
        return this.width * this.height;
    }

    getHeight(){
        return this.height;
    }
    getWidth(){
        return this.width;
    }
    setHeight(height){
        this.height = height;
    }
    setWidth(width){
        this.width = width;
    }
    
}

const newSquare = new Square(10);
console.log(newSquare.getArea());

console.log(newSquare.getWidth());
console.log(newSquare.getHeight());
newSquare.setWidth(12);
newSquare.setHeight(12);
console.log(newSquare.getArea());