function addrandomNumber(a,b){
    const num = Math.random();
    return a + b + num;
}

console.log(addrandomNumber(5,15));

for(let i=0; i<20 ; i++){
    console.log(addrandomNumber(5,15));
}