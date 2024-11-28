const middleFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("provide age in url");
    } else if (req.query.age > 18) {
        next();
    } else {
        res.send("cannot give access");
    }
}

module.exports = middleFilter;