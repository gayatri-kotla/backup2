const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello world")
});

app.get("/students",(req,res)=>{
    res.send("Students list")
})


app.listen("3000", ()=> console.log("server running"))