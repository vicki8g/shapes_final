var Shape = require("./Shape.js");

// create constructor - a special method for creating and initializing an object created with a class.
function Square(sideLength) {

  if (!(this instanceof Square)) {
    return new Square(sideLength);
  }

  this.sideLength = sideLength;

}

// set the .prototype equal to an instance of shape OR reset prototype -  an object. All JavaScript objects inherit their properties and methods from their prototype

Square.prototype = new Shape();

//reset the constructor on Square.prototype.
Square.prototype.constructor = Square;

module.exports = Square;