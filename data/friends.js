
// var users= [[7, 6, 2], [4, 3, 2], [4, 5, 1], [7, 6, 2], [6, 5, 1]];

// users[0]
// users[0][i];

// var temp = [];


var users= [{
    "name":"Mayra",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
      ]
  },
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
      ]
  },
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        4,
        4,
        4,
        4,
        ,
        1,
        2,
        5,
        4,
        1
      ]
  }];

users[0]
users[0].scores[i]


function goingThrough (arr){
    var currentUser;
    var otherUser;
    var result;

    for (var i = 1; i < arr.length; i++) {
        currentUser = arr[0];
        otherUser = arr[i];
        temp.push(totalDifference(currentUser, otherUser));
    }
    console.log("temp", temp);
}



function totalDifference (currUser, users) {
    var tempArray= [];

    for (var i = 0; i < users.length; i++) {
        console.log(currUser[i], users[i]);
        var difference = currUser[i] - users[i];
        var totalDifference = Math.abs(difference);
        tempArray.push(totalDifference);
    }
    console.log(tempArray);

    result = score(tempArray);
    console.log(result);
    return result;
}


function score(arr) {
    return arr.reduce((total, num) => total + num);;
}

goingThrough(users);

console.log(temp);