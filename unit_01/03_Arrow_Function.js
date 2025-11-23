//general function.......

function printmessage(name){
    return "hi I am " + name ;
}

console.log(printmessage("tharaka"));

//arrow function 

const printDetails = (name , age)=>{
    return "hi i am " + name + " and i am " + age + " years old...";
}

console.log(printDetails("Nimal" , 25));


const add = (a , b) => {
    return (a + b);
}

console.log("total : " + add(10 , 20));