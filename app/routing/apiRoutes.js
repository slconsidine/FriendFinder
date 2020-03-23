// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var allFriends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(allFriends);
  });


  app.post("/api/friends", function(req, res) {
    var user = req.body;
    console.log(user);
    var friend = findFriend(user);
    console.log("friend= " + friend.name);
    res.json(friend);

});

  function findFriend(user) {
      var scoreDiff = 0;
      var lowestScore = 100;
      var matchedFriend;
      for (var i=0; i<allFriends.length; i++) {
          scoreDiff = 0;
          for(var x = 0; x<allFriends[i].scores.length; x++)
            scoreDiff += Math.abs(user.scores[x] - allFriends[i].scores[x])
            console.log(allFriends[i].name + " scoreDiff = " + scoreDiff);
            if (scoreDiff <= lowestScore) {
                lowestScore = scoreDiff;
                matchedFriend = allFriends[i];
            }
      }
      allFriends.push(user);
      return matchedFriend;
  }

};
