// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const express = require('express');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();
var bodyParser = require('body-parser');
var path = require('path'); //node package built in already. no npm install


// Sets an initial port so that we can use this later in our listener
var PORT = process.env.PORT || 3000; //whatever port is assigned by the remote server. else use 3000



// create application/x-www-form-urlencoded parser. middleware 
app.use(bodyParser.urlencoded({ extended: true}));

//parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json'}))

//parse some custom thing into a buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

//parse an HTML body into a string
app.use(bodyParser.text({type: 'text/html'}))


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
//**********including html and api route files in the server*************** */
require('./app/routing/apiRoutes.js') (app); //first api-routes . pass express app
require('./app/routing/htmlRoutes.js')(app); //html routes in server file
//************************************************************* */



// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function(){
    console.log("Friend-Finder App listening on PORT: " + PORT);
});












