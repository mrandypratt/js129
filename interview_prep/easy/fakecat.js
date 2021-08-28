// OLOO (Prototypal)
let catOLOOPrototype = {
  init(name) {
    this.name = name;
    return this;
  },
  
  speaks() {
    return `${this.name} says meowwww.`;
  },
}

let fakeOLOOCat = Object.create(catOLOOPrototype);

console.log(catOLOOPrototype.isPrototypeOf(fakeOLOOCat)); // logs true
console.log(fakeOLOOCat.name);           // logs undefined
console.log(fakeOLOOCat.speaks());       // logs undefined says meowwww.

// Construtors / Prototypes (Pseudo-Classical)
function CatConstructor(name) {
  this.name = name;
}

CatConstructor.prototype = {
  speaks() {
    return `${this.name} says meowwww.`;
  },
};

let fakeConstructorCat = new CatConstructor();

console.log(fakeConstructorCat instanceof CatConstructor); // logs true
console.log(fakeConstructorCat.name);           // logs undefined
console.log(fakeConstructorCat.speaks());       // logs undefined says meowwww.

// ES6 Classes (Pseudo-Classical)
class CatClass {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeClassCat = new CatClass() // your implementation
console.log(fakeClassCat instanceof CatClass); // logs true
console.log(fakeClassCat.name);           // logs undefined
console.log(fakeClassCat.speaks());       // logs undefined says meowwww.