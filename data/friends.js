const users = [
    {
      name: "Mayra",
      photo:
        "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [1, 1, 1, 1]
    },
    {
      name: "Ahmed",
      photo: "http:linkforAhmed",
      scores: [1, 2, 2, 1]
    },
    {
      name: "dennis",
      photo: "http:linkforDennis",
      scores: [1, 2, 3, 4]
    },
    {
      name: "jon",
      photo: "http:linkforJon",
      scores: [1, 2, 2, 1]
    }
  ];


  module.exports = users;

  
  // const findTotalScore = usersArr => {
  //   let [currentUser, ...otherUsers] = usersArr;
  //   let bestMatches = [];
  //   let lowestCompatibility = 1000;
  
  //   otherUsers.forEach((otherUser) => {
  //       let compatibility = totalDifference(currentUser.scores, otherUser.scores);
  //       otherUser.compatibility = compatibility;
  
  //       if (lowestCompatibility > compatibility) {
  //           lowestCompatibility = compatibility;
  //           bestMatches = [];
  //           bestMatches.push(otherUser);
  //     } else if (lowestCompatibility === compatibility) {
  //           lowestCompatibility = compatibility;
  //           bestMatches.push(otherUser);
  //     }
  //   });
  //     return bestMatches;
  // }
  
  // function totalDifference(currScores, otherUserScores) {
  //   var tempArray = [];
  
  //   for (var i = 0; i < otherUserScores.length; i++) {
  //     var difference = Math.abs(currScores[i] - otherUserScores[i]);
  //     tempArray.push(difference);
  //   }
  //   return tempArray.reduce((total, num) => total + num);
  // }
  
  // const bestMatch = findTotalScore(users);
    
  // function displayMatchInfo (bestMatch) {
  //   bestMatch.forEach((userInfo) => {
  //     console.log(`Best match is ${userInfo.name}!`)
  //     console.log(userInfo.photo);
  //   });
  // }

  // displayMatchInfo(bestMatch);