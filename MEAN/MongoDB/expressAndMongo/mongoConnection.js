const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb+srv://gayatrikotla333:40L7ipLL8vBUsFWN@cluster0.dsfvy.mongodb.net/");

async function dbConnection() {
    await client.connect();
    const db = client.db("cluster");
    let studentsCollection = db.collection("students");

}

dbConnection();