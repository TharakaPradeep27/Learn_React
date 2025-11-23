const arr = [1,2,3,4,5,6]
const summation = (...args)=>{ //rest operator
    let sum= 0 ;
    for(const arg of args){
        sum = sum + arg;
    }
    console.log(sum);
}

summation(...arr);  //spread operator