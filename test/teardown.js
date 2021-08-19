const fs = require('fs');


//teardown test db by copying backup database
after(async () => {
    fs.copyFile('jokes-database.db.backup', 'jokes-database.db', (err) => {
        if (err) throw err;
        //console.log('database restored');
      });
})