// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends data.
// ===============================================================================
//require data from the friends.js file and saving the reference to friendData.
var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// making route inside the module.exports so that server.js can use this route. 
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the friends.js)
  // ---------------------------------------------------------------------------

  //api routes deliver the DATA from the front to the back-end and from the back to the front-end.
  app.get("/api/friends", function (req, res) {
    res.json(friendData); //response in json format
  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript  array
  // (ex. User fills out a survey... this data is then sent to the server...
  // Then the server saves the data to the friends array)
  // ---------------------------------------------------------------------------
  // A POST routes `/api/friends`. This will be used to handle incoming survey results. 
  //This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function (req, res) {
    //  Our "server" will respond to requests and let users know the closest match.
    //creating object with empty name and phone. placing a large number for friendDifference 
    //so that it could be replaced by a smaller sum later.
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 10000 // closest answer to the newUser
    };
    //********* req.body is available since we're using the body parsing middleware************/ 
    console.log(req.body);
    // taking the result of the newUser survey post and parsing it.
    var userData = req.body;
    var userScores = userData.scores;
   

    //variable to calculate the difference between the newUserScores and the scores of each user in the array.
    var totalDifference = 0;

    /******************NESTED FOR LOOP************* */
    //first loop to loop through all the friends 
    for (var i = 0; i < friendData.length; i++) {

      //console.log(friendData[i]);
      totalDifference = 0;

      //second loop to loop thourgh the scores array for each friend
      for  (var j = 0; j < friendData[i].scores.length; j++) {

        //calculating the difference between the scores. sum them into the totalDiffference
        //using Math.abs() to get an absolute number(no negative)
        //parsing them to integers for calculation
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));

       
        //if the sum of differences is less then the differences of the current bestMatch
        if (totalDifference <= bestMatch.friendDifference) {
          //replace the bestMatch to be the new friendData
          bestMatch.name = friendData[i].name;
          bestMatch.photo = friendData[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }

    }

    //pushing th new user data to the array
    friendData.push(userData);

    //return the bestMatch as JSON back to the fron-end of the application
    res.json(bestMatch);
    /***Now go to servey.html and have the user send an object formatted in the same way to our server
     * at this route through a POST request using AJAX*/

    

  });

};
