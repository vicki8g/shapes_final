var Shape = require("./Shape.js");

// create constructor - a special method for creating and initializing an object created with a class.
function Pentagon(side1, side2, side3, side4, side5) {

  if (!(this instanceof Pentagon)) {
    return new Pentagon(side1, side2, side3, side4, side5);
  }

  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
  this.side5 = side5;

}

// set the .prototype equal to an instance of shape or reset prototype -  an object. All JavaScript objects inherit their properties and methods from their prototype
Pentagon.prototype = new Shape();

// reset the constructor property on Pentagon.prototype.
Pentagon.prototype.constructor = Pentagon;

module.exports = Pentagon;