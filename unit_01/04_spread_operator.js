const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1 , ...arr2];
console.log(arr3);

const obj1 = {
    first : 10 ,
    second: 20 , 
    third : 30 
}

const obj2 = {
    third : 30 ,
    fourth: 40
}

const obj3 = {...obj1 , ...obj2};

console.log(obj3);

function sum(a,b,c){
    console.log(a + b + c);
}
sum(...arr1);
sum(...Object.values(obj1));

//copy array element to another array 
 const array1 = [10,20,30];
 console.log(array1);
const array2 = [... array1];
array1[0] = 15;
console.log(array1);
console.log(array2);
