var users= [{
    "name":"Mayra",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        1,
        1,
        1,
        1
      ]
  },
  {
    "name":"Ahmed",
    "photo":"http:linkforAhmed",
    "scores":[
        4,
        5,
        6,
        3
      ]
  },
  {
    "name":"dennis",
    "photo":"http:linkforDennis",
    "scores":[
        1,
        2,
        3,
        4
      ]
  }];

var tempUsers = [];
var tempScores = [];

function score(arr){
    var result;
    for (var i = 1; i < arr.length; i++) {
        currentUser = arr[0];
        otherUser = arr[i];
        tempUsers.push([totalDifference(currentUser, otherUser), otherUser.name, otherUser.photo]);
        tempScores.push(totalDifference(currentUser, otherUser));
    }
}

function totalDifference (currUser, users) {
    var tempArray= [];
    var result;
    for (var i = 0; i < users.scores.length; i++) {
        var difference = currUser.scores[i] - users.scores[i];
        var totalDifference = Math.abs(difference);
        tempArray.push(totalDifference);
    }
    result = totalSum(tempArray);
    return result;
}

function totalSum(arr) {
    return arr.reduce((total, num) => total + num);
}

function bestMatch(arr) {
    var min = Math.min.apply(null, tempScores);
    for (var i = 0; i < tempUsers.length; i++) {
        if (tempUsers[i][0] === min){
            console.log(tempUsers[i][1], tempUsers[i][2]);
        }
    }
}

score(users);
bestMatch(tempUsers);
