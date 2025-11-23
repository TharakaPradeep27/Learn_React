class Person{
    constructor(name , age){
        this.name= name;
        this.age = age;
    }
    printDetails(){
        console.log(`person is ${this.name} & he is ${this.age} years old..`)
    }
}

class Programmer extends Person{
    constructor(name , age , language){
        super(name , age);
        this.language = language;
    }
    printDetails(){
        super.printDetails();
        console.log(`Also he knows ${this.language} well.`);
    }
}
class student extends Programmer{
    constructor(name , age , language , university){
        super(name ,age , language);
        this.university = university;
    }
    printDetails(){
        super.printDetails();
        console.log(`${this.name} study in ${this.university}.`)
    }
}
const person1 = new Person("Tharaka" , 25);
person1.printDetails();

const programmer1 = new Programmer("Amal" , 28 , "JavaScript");
programmer1.printDetails();

const student1 = new student("nimal" , 22 , "python" , "University of jaffna");
student1.printDetails();