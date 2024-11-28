const express = require("express");

const app = express();

const middleFilter = require("./1middleWareFunction");

app.use(middleFilter);

app.get("/home", (req, res) => {
    res.send("Home Page")
}).listen("5000")