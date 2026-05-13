const { log } = require("console");
const { resolve } = require("dns");

const promiseOne = new Promise((resolve, reject) => {
    // do async task
    // db calls, crytography, network calls
    setTimeout(() =>{
        console.log('Async task is complete');
        resolve();
    }, 1000)
});

promiseOne.then(() => {
    console.log("Promise cosumed");
});



new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved");
})




const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user)
})



const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error) resolve({username: "dhruv", password: "123"});
        else reject('Something went wrong')
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("The promise is either resolved or rejected")
})





const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) resolve({username: "dhruv", password: "123"});
        else reject('ERROR: JS went wrong')
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
    console.log(response);
    } catch(error){
        console.log(error)
    }
}

consumePromiseFive();





// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch(error){
//         console.log("E: ", error)
//     }
// }

// getAllUsers();




fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})