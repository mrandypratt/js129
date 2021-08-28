/*

Create a class Rectangle.

The constructor should take 2 arguments which represent width and length respectively.

Implement the class so that the output from the example below is correct.

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

let factoryRect = rectangleFactory(4, 5);

console.log(factoryRect.getWidth()); // 4
console.log(factoryRect.getLength()); // 5
console.log(factoryRect.getArea()); // 20

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

let olooRect = Object.create(rectanglePrototype).init(4, 5);

console.log(olooRect.getWidth()); // 4
console.log(olooRect.getLength()); // 5
console.log(olooRect.getArea()); // 20

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

let constructorRect = new RectangleConstructor(4, 5);

console.log(constructorRect.getWidth()); // 4
console.log(constructorRect.getLength()); // 5
console.log(constructorRect.getArea()); // 20

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

let classRect = new RectangleClass(4, 5);

console.log(classRect.getWidth()); // 4
console.log(classRect.getLength()); // 5
console.log(classRect.getArea()); // 20