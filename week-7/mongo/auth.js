const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

function auth(req, res, next){
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({
            message: "No token provided"
        });
    }

    try {
        const response = jwt.verify(token, JWT_SECRET);

        req.userId = response.id;
        next();
    } catch (err) {
        res.status(403).json({
            message: "Incorrect credentials"
        });
    }
}

module.exports = {
    auth,
    JWT_SECRET
}