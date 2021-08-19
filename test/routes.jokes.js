var expect  = require("chai").expect;
var request = require("request");

var server = null;

//start test server
before(async () =>{
    var app = require("../app");
    server = app.listen("3000")
})

describe("Joke API", function() {

    describe("Get Random Joke", function() {
  
      var url = "http://localhost:3000/api/joke";
      it("returns status 200", function() {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
          });
      });
      it("returns the correct joke", function() {
        request(url, function(error, response, body) {
            //console.log(body)
            expect(body).to.equal('{"message":"success","joke":{"type":"knock-knock","setup":"hi","punchline":"bye"}}');
          });
      });
  
    });
});

//stop server
after(async () => {
    server.close()
})