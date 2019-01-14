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
//**********including route files in the server*************** */
require('./app/routing/apiRoutes.js') (app); //first api-routes 
require('./app/routing/htmlRoutes.js')(app);
//************************************************************* */



// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function(){
    console.log("Friend-Finder App listenin on PORT: " + PORT);
});
















