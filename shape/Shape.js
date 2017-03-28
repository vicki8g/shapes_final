//constructor function
function Shape() {
  this.type = "shape";
}

// attach a prototype function
Shape.prototype.get_type = function get_type() {
  return this.constructor;
};

module.exports = Shape;