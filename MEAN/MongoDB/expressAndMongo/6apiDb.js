const express = require("express");
const dbCollection = require("./4config");
const { ObjectId } = require("mongodb");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    const collection = await dbCollection();
    const arr = await collection.find().toArray();
    res.send(arr);
});

app.post("/create", async (req, res) => {
    const collection = await dbCollection();
    const result = await collection.insertOne(req.body);
    if (result.acknowledged) {
        console.log("data inserted");
        res.status(200).send("data inserted successfully");
    } else {
        res.status(500).send("data insertion failed");
    }
})

app.listen("3030", () => console.log("server hosted on server 3030"));