// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var allFriends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(allFriends);
  });


  app.post("/api/friends", function(req, res) {

    $("#submit").on("click", function() {
        var questions = getElementByClassName("questions");
        var scoreAnswers = [];
        for (var i=0; i<questions.length; i++) {
            var newAnswer = $(this).children("option:selected").val();
            scoreAnswers.push(newAnswer);
        }
    })
  });

};
