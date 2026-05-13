const fs = require("fs");


function setTimeoutPromisified(duration){
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}


function readFileAsync(){
    return new Promise((resolve, reject) => {
        fs.readFile("a.txt", "utf-8", function(err, data){
            if(err){
                reject("File not found")
            }else{
                resolve(data)
            }
        })
    })
}

// async function solve(){
//     await setTimeoutPromisified(1000);
//     console.log("hi");
//     await setTimeoutPromisified(3000);
//     console.log("hello");
//     await setTimeoutPromisified(5000);
//     console.log("hi there");
// }


// async function solve(){
//     const data = await readFileAsync();
//     console.log(data);
// }

// solve();


readFileAsync()
.then((data) => {
    console.log(data);
})
.catch((e) => {
    console.log(e)
})