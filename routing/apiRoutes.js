var friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var newuser = req.body;
    console.log(newuser);
    friendsData.push(newuser);
    res.json(newuser);
  });

    const findTotalScore = friendsData => {
    let [currentUser, ...otherUsers] = friendsData;
    console.log(currentUser);
    let bestMatches = [];
    let lowestCompatibility = 1000;
  
    otherUsers.forEach((otherUser) => {
        let compatibility = totalDifference(currentUser.scores, otherUser.scores);
        otherUser.compatibility = compatibility;
  
        if (lowestCompatibility > compatibility) {
            lowestCompatibility = compatibility;
            bestMatches = [];
            bestMatches.push(otherUser);
      } else if (lowestCompatibility === compatibility) {
            lowestCompatibility = compatibility;
            bestMatches.push(otherUser);
      }
    });
    console.log(bestMatches);
      return bestMatches;
  }
  
  function totalDifference(currScores, otherUserScores) {
    var tempArray = [];
  
    for (var i = 0; i < otherUserScores.length; i++) {
      var difference = Math.abs(currScores[i] - otherUserScores[i]);
      tempArray.push(difference);
    }
    return tempArray.reduce((total, num) => total + num);
  }
  
  const bestMatch = findTotalScore(friendsData);
    
  function displayMatchInfo (bestMatch) {
    bestMatch.forEach((userInfo) => {
      console.log(`Best match is ${userInfo.name}!`)
      console.log(userInfo.photo);
    });
  }

  displayMatchInfo(bestMatch);

    
}

