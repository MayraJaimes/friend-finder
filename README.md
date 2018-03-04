# Friend Finder - Node and Express Servers

### Overview

Friend Finer is a compatibility-based application similar to dating apps but for people trying to make a friend. This full-stack site will takes in the results from the users' surveys and compares their answers with those from other users that have submitted their answers. The app then displays the name and picture of the user with the best overall match. 

1. The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Express is used to handle routing. There are routes set to get the home page, the survey page, the api page as well as routes that posts data to these routes.

### Logic

1. The user's most compatible friend is determined with the logic below:

   * Each user's results are converted into an array of numbers.
   * Then the difference between current user's scores against those from other users are compared, question by question and the absolute value of the difference of each are pushed into a temporary array.
   * Then the indices of the temporary array are added to get the total difference score.
   * The closest match is the user with the least amount of difference.

2. Once the best match has been found, the results are displayed as a modal pop-up. The modal displays both the name and picture of the closest match. 

