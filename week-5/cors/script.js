const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
// app.use(cors());

// app.use(cors({
//     domain: ["http://127.0.0.1:5500/week-5/cors/index.html"]
// }))

/**
 * If we want to host both frontned and backend on same server.
 * we can use below mentioned method, so that we don't need cors
 */

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/sum', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a+b
    });
})

app.listen(3000);