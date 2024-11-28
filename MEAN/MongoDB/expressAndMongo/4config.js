const { MongoClient } = require("mongodb");

async function dbCollection() {
    const client = new MongoClient("mongodb+srv://gayatrikotla333:40L7ipLL8vBUsFWN@cluster0.dsfvy.mongodb.net/");
    await client.connect();
    return client.db("cluster").collection("students");

}

module.exports = dbCollection;