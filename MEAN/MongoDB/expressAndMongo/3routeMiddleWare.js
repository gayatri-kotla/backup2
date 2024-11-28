const express = require("express");

const route = express.Router();

const app = express();

const middleFilter = require("./1middleWareFunction");

route.use(middleFilter);

app.get("/home", (req, res) => {
    res.send("this is home page");
})

route.get("/about", (req, res) => {
    res.send("this is about page")
})

app.use("/", route).listen("4000");