var express = require('express');

var app = express();

const path = require('path');

app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')));

app.post('/process_get',(req,res)=>{

    const Fname = req.body.first_name;
    const Lname = req.body.last_name;

    res.send(`${Fname}, ${Lname}`)
});

app.listen(3000);