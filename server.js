// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const express = require('express');

var path = require('path'); //node package built in already. no npm
var bodyParser = require('body-parser');


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000; //whatever port is assigned by the remote server. else use 3000



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: false}))
//parse application/json
app.use(bodyParser.json())

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
//**********including html route files in the server*************** */
require('./app/routing/apiRoutes.js') (app); //first api-routes . pass express app
require('./app/routing/htmlRoutes.js')(app); //html routes in server file
//************************************************************* */



// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function(){
    console.log("Friend-Finder App listenin on PORT: " + PORT);
});


//STEPS:
//1. Setup the server. npm init to create package JSON
//2. Install npm packages.
//3. run the server and check if it is listening to the port.
//4. build folder structure to organize the code.
//5. create all the html pages. include CDN for CSS and JavaScript. CSS=bootstrap and font-awesome, JavaScript=jQuery
//6. build out the routing so that router can deliver html pages to the users. htmlRoutes.js
//7. include our htmlRoute.js file in our server.js by requiring it.
//8. create the data. create an array of data. friends.js
//9. build apiRoutes.js for accessing friends.js
//10. include apiRoutes in the server.js
//11. need to build a way for the users-information that they put in the same format as other objects.

//next need to build a way for the users information that they put in the survey to get put in  the same format as my
//other objects that I can compare them.
//closest match based on my answer










