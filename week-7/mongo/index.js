const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const  { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");

mongoose.connect(process.env.MONGO_URI);


const app = express();
app.use(express.json());


app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });

    res.json({
        message: "You are signed up"
    })
});

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password
    });

    console.log(response);

    if (response) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        });
    }
});

app.post("/todo", auth, (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    TodoModel.create({
        userId,
        title,
        done
    })

    res.json({
        userId: userId
    }) 
});

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        todos
    }) 
});


app.listen(process.env.PORT);