// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
    "name": "Syeda",
    "photo": "https://www.facebook.com/photo.php?fbid=10160718432180455&set=a.10150245990845455&type=3&theater",
    "scores": [
    "5",
    "1",
    "4",
    "4",
    "5",
    "1",
    "2",
    "5",
    "4",
    "1"
    ]
    },

    {
      "name": "Darakhshan",
      "photo": "https://www.facebook.com/photo.php?fbid=10152352221670455&set=a.10150245990845455&type=3&theater",
      "scores": [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
      ]
      }
  ];
  
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  