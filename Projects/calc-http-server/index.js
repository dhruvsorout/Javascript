const express = require('express');
const app = express();

app.get('/multiply', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if(isNaN(a) || isNaN(b)) {
        return res.send("Invalid Input")
    }

    res.send(String(a*b));
})

app.get('/add', (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    if(isNaN(a) || isNaN(b)) {
        return res.send("Invalid Input")
    }

    res.send(String(a+b));
})

app.get('/divide/:firstArg/:secondArg', (req, res) => {
    const a = Number(req.params.firstArg);
    const b = Number(req.params.secondArg);

    if(isNaN(a) || isNaN(b)) {
        return res.send("Invalid Input")
    }

    res.send(String(a/b));
})

app.get('/subtract/:firstArg/:secondArg', (req, res) => {
    const a = Number(req.params.firstArg);
    const b = Number(req.params.secondArg);

    if(isNaN(a) || isNaN(b)) {
        return res.send("Invalid Input")
    }

    res.send(String(a-b));
})

app.listen(3000)