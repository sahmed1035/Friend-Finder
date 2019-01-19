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
    "name": "Sameer",
    "photo": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/50641875_10102622865388545_2341087145772449792_n.jpg?_nc_cat=101&_nc_ht=scontent-ort2-1.xx&oh=e5f7e24be32b2617b2fe15286550571d&oe=5CFACBCC",
    "scores": [
      "5",
      "5",
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
    "name": "Nazia",
    "photo": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/33157685_1847790758612849_6446121388691423232_n.jpg?_nc_cat=102&_nc_ht=scontent-ort2-1.xx&oh=678c5dde343d5af8332271f5a9fb48cf&oe=5CC10CF1",
    "scores": [
      "5",
      "5",
      "4",
      "4",
      "5",
      "1",
      "5",
      "5",
      "4",
      "1"
    ]
  },

  {
    "name": "Joe",
    "photo": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/29542049_1955503797793816_348135939983369312_n.jpg?_nc_cat=104&_nc_ht=scontent-ort2-1.xx&oh=e1d8cf53a5156297ac77a97dc9d38fcf&oe=5CB71BAC",
    "scores": [
      "5",
      "5",
      "5",
      "5",
      "5",
      "1",
      "5",
      "5",
      "4",
      "1"
    ]
  },

  {
    "name": "Lynda",
    "photo": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/11096566_351900708346765_8826560551350069313_n.jpg?_nc_cat=101&_nc_ht=scontent-ort2-1.xx&oh=60f7ce29bea4cea72aad293d99f80df8&oe=5CC49A6D",
    "scores": [
      "5",
      "5",
      "1",
      "5",
      "1",
      "1",
      "5",
      "1",
      "4",
      "1"
    ]
  },

  {
    "name": "Bill",
    "photo": "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/30059_113847571987585_6746079_n.jpg?_nc_cat=110&_nc_ht=scontent-ort2-1.xx&oh=c74a62f61fe7a97586863be86b076f52&oe=5CB996DC",
    "scores": [
      "5",
      "5",
      "1",
      "5",
      "1",
      "1",
      "5",
      "1",
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
