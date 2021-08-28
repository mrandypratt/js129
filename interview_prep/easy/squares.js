/*

Create a class Rectangle.

The constructor should take 2 arguments which represent width and length respectively.

Implement the class so that the output from the example below is correct.

Write a class called Square that inherits from Rectangle, and is used like this:

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

*/

// Factory Function
function rectangleFactory(width, length) {
  return {
    width,
    length,
    
    getWidth() {
      return this.width;
    },

    getLength() {
      return this.length;
    },
    
    getArea() {
      return this.width * this.length;
    },
  };
}

function squareFactory(size) {
  return rectangleFactory(size, size);
}

let factorySquare = squareFactory(5);

console.log(factorySquare.getArea()); // 25

// OLOO (Prototypal)
let rectanglePrototype = {
  init(width, length) {
    this.width = width;
    this.length = length;
    return this;
  },
  
  getWidth() {
    return this.width;
  },

  getLength() {
    return this.length;
  },
  
  getArea() {
    return this.width * this.length;
  },
};

let squarePrototype = Object.create(rectanglePrototype);
squarePrototype.init = function init(size) {
  this.width = size;
  this.length = size;
  return this;
}

let olooSquare = Object.create(squarePrototype).init(5);

console.log(olooSquare.getArea()); // 25

// Construtors / Prototypes (Pseudo-Classical)
function RectangleConstructor(width, length) {
  this.width = width;
  this.length = length;
}

RectangleConstructor.prototype = {
  getWidth() {
    return this.width;
  },

  getLength() {
    return this.length;
  },
  
  getArea() {
    return this.width * this.length;
  },
};

function SquareConstructor(size) {
  RectangleConstructor.call(this, size, size);
}

SquareConstructor.prototype = Object.create(RectangleConstructor.prototype);

let constructorSquare = new SquareConstructor(5);

console.log(constructorSquare.getArea()); // 25

// ES6 Classes (Pseudo-Classical)
class RectangleClass {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  
  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }
  
  getArea() {
    return this.width * this.length;
  }
}

class SquareClass extends RectangleClass {
  constructor(size) {
    super(size, size);
  }
}

let classSquare = new SquareClass(5);

console.log(classSquare.getArea()); // 25