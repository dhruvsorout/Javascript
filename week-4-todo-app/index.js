const express = require('express');
const app = express();

app.use(express.json());

var users = [
    {
        name: 'John',
        kidneys: [{
            healthy: false
        }]
    }
]

app.get("/", (req, res) => {
    const userKidneys = users[0].kidneys;
    const numOfKidneys = userKidneys.length;
    let numOfHealthyKidneys = 0;
    for(let i = 0; i < numOfKidneys; i++){
        if(userKidneys[i].healthy){
            numOfHealthyKidneys++;
        }
    }
    const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;

    res.json({
        numOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
})

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", (req, res) => {
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Done!"
    })
})

app.delete("/", (req, res) => {
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }

    users[0].kidneys = newKidneys;
    res.json({
        msg: "Done!"
    })
})

app.listen(3000);