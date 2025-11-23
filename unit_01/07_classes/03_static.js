class Square{
    constructor(width){
        this.width = width;
        this.height = width;
    }
    getArea(){
        return this.width * this.height;
    }
    static calArea(a , b){
        return a * b;
    }
}

console.log(Square.calArea(12,12));