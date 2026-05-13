// const fs = require("fs");

const { networkInterfaces } = require("node:os");

// fs.readFile("a.txt", "utf-8", function(err, contents){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(contents);
//     }
// })

// fs.readFile("b.txt", "utf-8", function(err, contents){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(contents);
//     }
// })

// fs.readFile("a.txt", "utf-8", function(err, contents){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(contents);
//     }
// })

// console.log("done!!")




// function timeout(){
//     console.log("click the button");
// }

// console.log("hi");

// setTimeout(timeout, 1000);

// console.log("welcome to loupe");

// let c = 0;
// for(let i = 0; i < 10000000000; i++){
//     c = c+1;
// }

// console.log("Expensive operation done")






// class Rectangle{
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area(){
//         const area = this.width * this.height;
//         return area;
//     }

//     paint(){
//         console.log(`Painting with color ${this.color}.`);
//     }
// }

// const rect = new Rectangle(2, 4, "red");
// const area = rect.area();
// console.log(area);
// rect.paint();





// const now = new Date();
// console.log(now.getFullYear());




// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('name'));
// console.log(map.get('age'));





// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Dhruv",
//     "full name": "Dhruv Sorout" ,
//     [mySym]: "key1",
//     age: 22,
//     location: "palwal",
//     email: "dhruv@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }


// JsUser.greetings = function(){
//     console.log(`Hello Js User, ${this["full name"]}`)
// }

// console.log(JsUser.greetings())






const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Dhruv",
            lastName: "Sorout"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 3: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].id)


// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('schoolName'))





const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
// console.log(instructor)





/*
    ARROW FUNCSTIONS
*/

const user = {
    username: "dhruv",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)



// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()



// const chai = () => {
//     let username = "hitesh"
//     console.log(this)
// }
// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return 

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)


// const addTwo = (num1, num2) => ({username: "dhruv"})

// console.log(addTwo(10,8))



/*
Immediately Invoked Function Expressions(IIFE)
*/

(function random() {
    console.log("DB Connected")
}) ();

( (name) => {
    console.log(`DB Connected again ${name}`)
} ) ("dhruv")