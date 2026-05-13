// map, filter, arrow functions



/**
 * Arror function
 */
// function sum(a, b){
//     return a + b;
// }

// const sum2 = (a, b) => {
//     return a + b;
// }

// console.log(sum2(1,2));


/**
 * MAP 
 * 
 * given an array, give me back a new array in which every value is multiplied by 2
 * [1,2,3,4,5]
 * [2,4,6,8,10]
 */


// const input = [1,2,3,4,5];

// const ans = input.map((i) => i*2)

// console.log(ans)  




/**
 * FILTER
 * 
 * what if I tell you, given an input array, give me back all the even values from it.
 */


// const arr = ["dhruv", "sorout", "ruchi", "thakur"]

// const ans = arr.filter((i) => i.startsWith("d") || i.startsWith("r"))

// console.log(ans)



/**
 * HOMEWORK
 * 
 * create a map function that takes an array and a transform function as input and returns the transformed array as output
 */


const arr = [1,2,3,4,5,6,7,8,9,10];

function transform(i){
    return i*5;
}

const myMap = function(arr, transform){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        result.push(transform(arr[i]));
    }

    return result;
}

const ans = myMap(arr, transform);

console.log(ans)