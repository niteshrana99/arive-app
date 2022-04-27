const express = require('express')
const app = express();
const port = 3001;
const fs = require('fs');
var cors = require('cors');
app.use(cors())

app.use(express.json());

app.get('/users', (req, res) => {
    let rawdata = fs.readFileSync('users.json');
    let users = JSON.parse(rawdata);
    res.status(200).json(users)
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    let rawdata = fs.readFileSync('users.json');
    let users = JSON.parse(rawdata);
    users.push(newUser);
    fs.writeFileSync('users.json', JSON.stringify(users));
    res.status(200).json(newUser)
});

app.get('/hobbies', (req, res) => {
    const {id} = req.query;
    let rawdata = fs.readFileSync('hobbies.json');
    let hobbies = JSON.parse(rawdata);
    const userHobbies = hobbies[id];
    res.status(200).json(userHobbies || [])
});

app.post('/hobbies', (req, res) => {
    const {id} = req.query;
    let rawdata = fs.readFileSync('hobbies.json');
    let hobbies = JSON.parse(rawdata);
    if(!hobbies[id]) {
        hobbies[id] = []
    }
    hobbies[id].push(req.body);
    fs.writeFileSync('hobbies.json', JSON.stringify(hobbies));
    res.status(200).json(hobbies[id])
});


app.delete('/hobbies', (req, res) => {
    const {id} = req.query;
    let rawdata = fs.readFileSync('hobbies.json');
    let hobbies = JSON.parse(rawdata);
    hobbies[id] = hobbies[id].filter((hobby) => {
        console.log(req.id)
        if(hobby.id != req.body.id) return hobby;
    })
    fs.writeFileSync('hobbies.json', JSON.stringify(hobbies));
    res.status(200).json(hobbies[id])
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})