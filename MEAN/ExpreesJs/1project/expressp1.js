var express = require('express');
const { ChatGPTLoader } = require('langchain/document_loaders/fs/chatgpt');
var app = express();

app.get('/',(req,res)=>{
    res.send('welcome to express', );
})

var server = app.listen(8084,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("example app listening at http://%s:%s",host,port);
})