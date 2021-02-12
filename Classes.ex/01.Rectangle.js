class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color.charAt(0).toUpperCase() + color.slice(1);
    }

    calcArea(){
        return Number(this.width * this.height);
    }
}