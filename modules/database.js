var sqlite3 = require('sqlite3').verbose()

// connect ot the db
//note: READONLY mode here
let db = new sqlite3.Database('jokes-database.db', sqlite3.OPEN_READONLY,(err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }
});


// callback of the form `function (err, joke) => {}`
function getRandomJoke(callback){
    // randomise the jokes in db and select 1
    var sql = "select type as type, setup as setup, punchline as punchline from jokes ORDER BY RANDOM() LIMIT 1"
    db.get(sql, callback);
}


module.exports = getRandomJoke