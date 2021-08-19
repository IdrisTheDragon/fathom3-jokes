const fs = require('fs');


//setup a test DB copying exisitng db to backup location
before(async () => {  
    fs.copyFile('jokes-database.db', 'jokes-database.db.backup', (err) => {
        if (err) throw err;
        //console.log('jokes-database.db was copied to jokes-database.db.backup');
      });
    var sqlite3 = require('sqlite3').verbose()
    var db = new sqlite3.Database('jokes-database.db')
    // drop old table and setup new table
    db.serialize(function () {
        db.run('DROP TABLE jokes')
        db.run('CREATE TABLE jokes (id NUMBER, type TEXT, setup TEXT, punchline TEXT)')

        var stmt = db.prepare("INSERT INTO jokes VALUES (?,?,?,?)");
        stmt.run(1,"knock-knock","hi","bye",async (err) => {
            if (err) {
                return console.error(err.message);
            }
        });
        stmt.finalize();
    });
    db.close( async (err) => {
        if (err) {
            return console.error(err.message);
        }
        //console.log('Closed the database connection.');
    });

    //wait for test db
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(1000)
})