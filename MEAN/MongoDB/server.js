var express = require("express");
const { MongoClient } = require("mongodb");

var app = express();

const port = 3000;

const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

client.connect().then(()=>{
    console.log('connected successfully to MongoDB');

    const db = client.db('newCollege');

    app.get('/', (req,res)=>{
        res.send('hello world');
    });

    app.get('/items',async(req,res)=>{
        try{
            const collection = db.collection('teachers');

            const items = await collection.find({}).toArray();

            res.json(items);

        }catch(err){
            res.send('error in fetching items')
        }
    });

    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    });
})