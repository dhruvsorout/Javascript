const express = require('express');
const app = express();

function middleware(req, res, next){ 
    console.log(req.method)
    console.log(new Date().toLocaleTimeString());
    console.log(req.url)
    console.log(req.hostname)
    console.log(req.get('host'))
    console.log('-------------------------')
    next()
}

app.use(middleware)

app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a+b,
    })
})

app.get('/multiply', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a*b,
    })
})
app.get('/divide', (req, res)  => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a/b,
    })
})

app.listen(3000);