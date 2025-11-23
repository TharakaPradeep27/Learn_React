class Animal{
    constructor(){
        console.log("An animal class is created...");
    }
    makeSound(){
        console.log("Animals generally make sounds.. \n");
    }
}
class Dog extends Animal{
    constructor(){
        super();
        console.log("A Dog class is created...");
    }
    makeSound(){
        console.log("Dog normally Bark... \n");
    }
}

class cat extends Animal{
    constructor(){
        super();
        console.log("Cat class is created...");
    }
    makeSound(){
        console.log("cat make sound like Meow Meow... \n");
    }
}

const animal1 = new Animal();
animal1.makeSound();

const dog1 = new Dog();
dog1.makeSound();

const cat1 = new cat();
cat1.makeSound();