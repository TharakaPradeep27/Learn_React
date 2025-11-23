function openFile(callback){
    setTimeout(()=>{
        console.log("File opened....");
        callback();
    },3000);
}
function addSomething(){
    console.log("something added to the file.");
}
function removeSomething(){
    console.log("something removed from the file...");
}

openFile(addSomething);

openFile(removeSomething);

//mekedi open file waladi deparama 3s wait wene na
//palaweni open ekedi wait wena nisa dewani open ekata yanwa . ethanadith processs ekk ena nisa
// async process dekk hadenawa main process ekata amatharawa 
//eka nisa wait time eka samanai wage