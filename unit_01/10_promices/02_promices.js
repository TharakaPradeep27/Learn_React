function takeShower(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("You should take shower");
            resolve("you took shower");
        },2000);
    });
}

function doHomeWork(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("You should do homework");
            resolve("You did homework");
        },1000)
    });
}

function play(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("Now you can play a game");
            resolve("You played Cricket");
        },3000);
    });
}

takeShower().then((result)=>{
    console.log(result);
    return doHomeWork();
}).then((result)=>{
    console.log(result);
    return play();
}).then((result)=>{
    console.log(result);
    console.log("All are done...")
});


//mekedi karala thiyenne asynchrones functions 3k liyala thiyenawa.
//e function 3ta yamkisi order ekakata call karala thiyenwa.
//e order ekata print karanna oni nisa thamai promise concept eka use karanne.