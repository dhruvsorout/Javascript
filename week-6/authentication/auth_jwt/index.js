const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors")

const app = express();
app.use(express.json());


/**
 * link both frontend and backend
 */

/**
 * METHOD - 1 
 */
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})


/**
 * METHOD - 2
 */
// app.use(cors());
// app.use(express.static("./public"))

const JWT_SECRET = "USER_APP";

const users = [];

function logger(req, res, next){
    console.log(req.method + " request came.")
    next();
}

app.use(logger);

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.send({
        message: "You have signed up"
    })
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.header("jwt", token);

        res.json({
            token: token
        })
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
});

function loggedInMiddleware(req, res, next){
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    message: "Unauthorized"
                })
            } else {
                req.user = decoded;
                next();
            }
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
}

app.get("/me", loggedInMiddleware, (req, res) => {
    const user = req.user;

    res.json({
        username: user.username
    })
});

app.listen(3000);