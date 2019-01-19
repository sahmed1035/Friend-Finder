// ===============================================================================
// DATA
// Below data will hold all of the friends arrays. comming from the survey form on submit.
// Initially we just set it equal to a "dummy" friend.
// But could have it be an empty array as well.
// ===============================================================================

//array of objects with name, photo and scores[]
var friendArray = [
  {
    "name": "Syeda",
    "photo": "https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/21427581_10159527789790455_6869825643592615720_o.jpg?_nc_cat=109&_nc_ht=scontent-ort2-1.xx&oh=0827e084b202ce951deb1430be3e2ca1&oe=5CCB4A3A",
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
      "photo": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/27751825_1989770994677310_6789033263071176560_n.jpg?_nc_cat=101&_nc_ht=scontent-ort2-1.xx&oh=fbbc88973957b714d55cef4f9f382d32&oe=5CD140E8",
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
  
  
  //we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  