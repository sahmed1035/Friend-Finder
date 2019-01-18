// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// already in node. no need to install
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING: setting up routes to deliver the html pages to the user.
// ===============================================================================
//building routes inside the module.exports function so that we can include these path to the server
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  //telling express what page to deliver based on the path
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  
  // If no matching route is found default to home page. catch-all
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
