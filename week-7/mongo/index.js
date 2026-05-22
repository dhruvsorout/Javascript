const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { z } = require("zod");
require("dotenv").config();

// Internal imports
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");

// -------------------------------
// App config
// -------------------------------
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("DB connection error:", err));


// -------------------------------
// Validation Schemas
// -------------------------------

const signupSchema = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(50),
        password: z.string().min(3).max(30)
});


// -------------------------------
// Routes
// -------------------------------

/*
    SIGNUP
*/
app.post("/signup", async (req, res) => {
    try {
        // const parsedData = signupSchema.parse(req.body);
        const parsedDataWithSuccess = signupSchema.safeParse(req.body);

        if (!parsedDataWithSuccess.success) {
            return res.status(400).json({
                message: "Incorrect format",
                error: parsedDataWithSuccess.error.issues
            })
        }

        const { email, password, name} = req.body;

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });

        res.json({
            message: "You are signed up"
        });
    } catch (err) {
        res.status(500).json({
            message: "Error while signing up"
        });
    }
});


/*
    SIGNIN
*/
app.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const response = await UserModel.findOne({
        email: email,
    });

    const passwordMatch = await bcrypt.compare(password, response.password);

    console.log(response);

    if (response && passwordMatch) {
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


/*
    CREATE TODO
*/
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


/*
    GET TODOS
*/
app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        todos
    }) 
});


// -------------------------------
// Server
// -------------------------------
app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
});