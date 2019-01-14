// import express from 'express'; //ES6
const express = require('express');
var app= express();
var path = require('path'); //node package built in already. no npm
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000; //whatever port is assigned by the remote server. else use 3000



//parse application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

//parse application/json
app.use(bodyParser.json())


//**********including route files in the server*************** */
require('./app/routing/apiRoutes.js') (app); //first api-routes 
require('./app/routing/htmlRoutes.js')(app);
//************************************************************* */


//listening to the server
app.listen(PORT, function(){
    console.log("Friend-Finder App listenin on PORT: " + PORT);
})