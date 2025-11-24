function func1(callback) {
    setTimeout(() => {
        console.log("This is Function 1");
        callback();  // call next function
    }, 1000);
}

function func2(callback) {
    setTimeout(() => {
        console.log("This is Function 2");
        callback();
    }, 1000);
}

function func3(callback) {
    setTimeout(() => {
        console.log("This is Function 3");
        callback();
    }, 1000);
}

function func4(callback) {
    setTimeout(() => {
        console.log("This is Function 4");
        callback();
    }, 1000);
}

function func5(callback) {
    setTimeout(() => {
        console.log("This is Function 5");
        callback();
    }, 1000);
}

func1(() => {
    func2(() => {
        func3(() => {
            func4(() => {
                func5(() => {
                    console.log("All are done");
                });
            });
        });
    });
});


//This is called callback hell - Nested callbacks make code harder to read .
//That is why introduced promices