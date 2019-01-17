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
    "photo": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30739549_10160728437875455_3784399145972793344_o.jpg?_nc_cat=109&_nc_ht=scontent-ort2-1.xx&oh=a0aa07e85d8efdea1dcacb64fe9e5ae2&oe=5CBB76F6",
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
  