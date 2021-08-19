var expect    = require("chai").expect;
var getRandomJoke = require("../modules/database");

describe("database", function() {
    it("Get a Random Joke", async function() {
        getRandomJoke((err, joke) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            //console.log(joke)
            expect(joke.setup).to.equal("hi");
            expect(joke.punchline).to.equal("bye");
            expect(joke.type).to.equal("knock-knock");
        })
    });
  });


