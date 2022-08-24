class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    calArea(){
        return this.height*this.width;
    }
    get Area(){
        return this.calArea();
    }   
} 
const square = new Rectangle(5,5);
console.log(square.Area);

class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
      console.log(this.name+ ' barks.');
    }
}
let d = new Dog('Rex');
d.bark();