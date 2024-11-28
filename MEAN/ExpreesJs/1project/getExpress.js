var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get("/index1", function(req,res){
    // res.send("asdfasd")
    // console.log(__dirname);
    let pat = path.join(__dirname, 'index.html');
    console.log(pat);
    res.sendFile(pat);
});

app.get('/process_get', function(req,res){
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);

    res.end(JSON.stringify(response));
})

var server = app.listen(8000)