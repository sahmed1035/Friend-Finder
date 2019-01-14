# Project Title
### Friend-Finder
Node and Express Servers (week 13 assignment) 

## Project Description
link to the video: [Friend-Finder](https://drive.google.com/file/d/11HyHoZGI7l3W06Y1B_UHEEGBxE6aCuE0/view)
This is an dating-site like app where you can find friends on compatibility base. This is a full-stack site that takes results from users' surveys havign a series of 10 questions, then campare their answers with those from other users. After using the compatibility logic, it displays the name and picture of the user with the best overall match.
### Compatibility logic:
Determine the user's most compatible friend using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
   * The closest match will be the user with the least amount of difference.

## Getting Started
Follow the instruction for installing the packages. After cloning, run the app locally or deploy to any cloud servers. This app uses express.js to handle routing. This app does not use any database so all the data is saved as an array of objects. 

### Installing:
Node packages:
After downloading the app, type in npm install. It will install the the required packages. 
   * npm install

## Built With

* node.js
* Express 
* body-parser.js
* path.js
* html
* bootstrap

## Authors
* Syeda Ahmed