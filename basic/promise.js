const fs = require("fs");

// function logName(){
//     console.log("Dhruv");
// }

// setTimeout(logName, 3000)



/*
A Promise in JavaScript is an object that represents the eventual completion (or failure) of
an asynchronous operation and its resulting value. 

Promises are used to handle asynchronous operations more effectively than traditional callback 
functions, providing a cleaner and more manageable way to deal with code that executes asynchronously, 
such as API calls, file I/O, or timers.
*/


// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback(){
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback); 






// create the promisified version of fs.readfile, fs.writefile, cleanfile


function readTheFile(resolve){
    fs.readFile("a.txt", "utf-8", function(err, data){
        resolve(data);
    })
}

function readFile(fileName){
    return new Promise(readTheFile);
}

const p = readFile();

function callback(contents){
    console.log(contents);
}
// p.then(callback);




function setTimeoutPromisified2(duration){
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

function callback2(){
    console.log("1 second has passed");
}

// setTimeoutPromisified2(1000).then(callback2)







/*
    CALLBACK HELL
*/

// setTimeout(() => {
//     console.log("hi");
//     setTimeout(() => {
//         console.log("hello");
//         setTimeout(() => {
//             console.log("hello there");
//         }, 5000)
//     }, 3000);
// }, 1000); 



// setTimeoutPromisified2(1000).then(function(){
//     console.log("hi");
//     setTimeoutPromisified2(3000).then(function(){
//         console.log("hello")
//         setTimeoutPromisified2(5000).then(function(){
//             console.log("hi there")
//         });
//     });
// });



// Promise chaining

setTimeoutPromisified2(1000).then(function(){
    console.log("hi");
    return setTimeoutPromisified2(3000)
}).then(function(){
    console.log("hello");
    return setTimeoutPromisified2(5000)
}).then(function(){
    console.log("hi there")
});


console.log("outside the callback hell")