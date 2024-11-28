const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/cluster');


const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

// mongoose.connect('mongodb://localhost:27017/cluster');
// create a new user
app.get('/', (req, res) => {
    res.send("akanksha")
})
app.post('/users', async (req, res) => {
    console.log(req.body);
    try {
        // const user = new User(req.body);
        console.log(user); // coming as { _id: new ObjectId('66d9a7090ac3c7e0e6de1b5f') }
        // await user.save();
        res.json().status(200);
    } catch (err) {
        res.json(err);
    }
})
app.listen(3000, () => {
    console.log("running.....");
});