// Create Parent constructor
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
};

// Create child constructor
function Square(size) {
  this.length = size;
  this.width = size;
}

Square.prototype = Object.create(Rectangle.prototype); // Shares Instance methods
// Should set Constructor here, per below

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
};

let rect = new Rectangle(10, 5);
console.log(rect.getArea());     // => 50
console.log(rect.toString());    // => "[Rectangle 10 x 5]"

let sqr = new Square(5);
console.log(sqr.getArea());     // => 25
console.log(sqr.toString());    // => "[Square 5 x 5]"

// Constructor is not set automatically
console.log(rect.constructor); // => [Function: Rectangle]
console.log(sqr.constructor); // => [Function: Rectangle]

Square.prototype.constructor = Square;

console.log(rect.constructor); // => [Function: Rectangle]
console.log(sqr.constructor); // => [Function: Square]

console.log(sqr.constructor === Square.prototype.constructor)