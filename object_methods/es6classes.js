class Animal {
  constructor(name) {
    this.name = name;
  }
  
  static info() {
    console.log("[Function: Animal]")
  }
  animalMethod() {
    console.log(`I'm ${this.name} and I'm an animal!`);
  }
};

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  dogMethod() {
    console.log(`I'm ${this.name} and I'm an Dog!`);
  }
}

class Terrier extends Dog {
  constructor(name) {
    super(name);
  }
  terrierMethod() {
    console.log(`I'm ${this.name}. Yip, yip!`);
  }
}

// Use of prototypes still allows classes to work
let scottTheTerrier = { name: "Scott" };
Object.setPrototypeOf(scottTheTerrier, Terrier.prototype); // Set object to Constructor's Prototype to inherit
scottTheTerrier.terrierMethod(); // => I'm Scott. Yip, yip!
scottTheTerrier.dogMethod(); // => I'm Scott and I'm an Dog!
scottTheTerrier.animalMethod(); // => I'm Scott and I'm an animal!

// More easily, you can use the new keyword
let reginald = new Terrier('Reginald');
reginald.terrierMethod(); // => I'm Scott. Yip, yip!
reginald.dogMethod(); // => I'm Scott and I'm an Dog!
reginald.animalMethod(); // => I'm Scott and I'm an animal!

console.log(Animal.prototype.__proto__ === Object.prototype); // => true
console.log(Object.prototype.__proto__); // ==> null
Animal.info(); // => [Function: Animal]
