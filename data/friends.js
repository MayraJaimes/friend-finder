
// var users= [[7, 6, 2], [4, 3, 2], [4, 5, 1], [7, 6, 2], [6, 5, 1]];

// users[0]
// users[0][i];

var temp = [];


var users= [{
    "name":"Mayra",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        7,
        8,
        9,
        2
      ]
  },
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        4,
        5,
        6,
        3
      ]
  },
  {
    "name":"dennis",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        1,
        2,
        3,
        4
      ]
  }];


function score(arr) {
    function getSum(total, num) {
        return total + num;
    }
    return arr.reduce(getSum);
}

var currentUser;
var otherUser;

function goingThrough(arr){
    var result;
    for (var i = 1; i < arr.length; i++) {
        currentUser = arr[0];
        otherUser = arr[i];
        temp.push([otherUser.name, totalDifference(currentUser, otherUser)]);
    }
    console.log("temp", temp);
}

function totalDifference (currUser, users) {
    var tempArray= [];
    var result;

    for (var i = 0; i < users.scores.length; i++) {
        console.log(currUser.scores[i], users.scores[i]);
        var difference = currUser.scores[i] - users.scores[i];
        var totalDifference = Math.abs(difference);
        tempArray.push(totalDifference);
    }
    console.log(tempArray);
    result = score(tempArray);
    console.log(result);
    return result;
}

function score(arr) {
    return arr.reduce((total, num) => total + num);
}

goingThrough(users);

console.log(temp);