// axios vs fetch


/**
 * FETCH
 */

// function main(){
//     fetch("http://localhost:3000/todos")
//         .then(async response => {
//             const json = await response.json();
//             console.log(json.todos.length)
//         })
// }


// async function main2(){
//     const response = await fetch("http://localhost:3000/todos");
//     const json = await response.json();
//     console.log(json.todos.length);
// }

// main2();



/**
 * AXIOS
 */


// const axios = require("axios")

// function main(){
//     fetch("https://www.postb.in/1778518707198-8154471251182", {
//         method: "POST",
//         body: {
//             username: "dhruv",
//             password: "123456"
//         },
//         headers: {
//             "AUTHORIZATION": "Bearer 123"
//         }
//     })
//         .then(async response => {
//             const textualData = await response.text();
//             console.log(textualData)
//         })
// }


// async function main2(){
//     const response = await axios.get(
//         "https://httpdump.app/dumps/7d3c5a9a-b29a-4189-bb64-a5802c659d90", 
//     {
//         username: "dhruv",
//         password: "123456"
//     }, 
//     {
//         headers: {
//             Authorization: "Bearer 123",
//         }
//     });
//     console.log(response.data);
// }

// main2();


/**
 * ANOTHER WAY OF WRITING AXIOS
 */

const axios = require("axios");

async function main(){
    const response = await axios(
        {
            url: "https://httpdump.app/dumps/7d3c5a9a-b29a-4189-bb64-a5802c659d90",
            method: "PUT",
            headers: {
                Authorization: "Bearer 123",
            },
            data: {
                username: "dhruv"
            }
        }
    );

    console.log(response.data);
}

main();