function takeShower(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const shower = true;
            if(shower == true){
                console.log("you took shower");
                resolve("you took shower");
            }else{
                reject("You didn't take shower");
            }
        },2000);
    });
}

function doHomeWork(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const homework = false;
            if(homework == true){
                console.log("you should do homework");
                resolve("you did homework")
            }else{
                reject("You didn't do homework");
            }
        },1000);
    });
}

function play(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const plays = true;
            if(plays == true){
                console.log("he play what he likes");
                resolve("he play what he likes");
            }else{
                reject("He did not play a game");
            }
        },3000);
    });
}

takeShower().then((result)=>{
    return doHomeWork();
}).then((result)=>{
    return play();
}).then(()=>{
    console.log("All are done");
}).catch((error)=>{
    console.log(error);
});
