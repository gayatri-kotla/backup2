const dbCollection = require("./4config");

const main = async () => {
    let dbconnect = await dbCollection();
    let response = await dbconnect.find().toArray();
    console.log(response);
}
main();