var express = require('express');
var router = express.Router();

var getRandomJoke = require("../modules/database.js")


/* GET random joke. */
router.get('/', function(req, res, next) {
    getRandomJoke((err, joke) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "joke":joke,
        })
    })
});

module.exports = router;
