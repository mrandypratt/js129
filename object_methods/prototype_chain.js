function Animal() {}
Animal.prototype = {
  animalMethod() {
    console.log(`I'm ${this.name} and I'm an animal!`);
  }
};

function Dog() {}
Dog.prototype = {
  dogMethod() {
    console.log(`I'm ${this.name} and I'm an Dog!`);
  }
};

function Terrier() {
}
Terrier.prototype = {
  terrierMethod() {
    console.log(`I'm ${this.name}. Yip, yip!`);
  }
}

let scottTheTerrier = { name: "Scott" };
Object.setPrototypeOf(scottTheTerrier, Terrier.prototype); // Set object to Constructor's Prototype to inherit
scottTheTerrier.terrierMethod(); // => I'm Scott. Yip, yip!

Object.setPrototypeOf(Terrier.prototype, Dog.prototype); // Set Constructor's prototype to the next constructor's prototype to extend the chain
scottTheTerrier.dogMethod(); // => I'm Scott and I'm an Dog!

Object.setPrototypeOf(Dog.prototype, Animal.prototype); // Set Constructor's prototype to the next constructor's prototype to extend the chain
scottTheTerrier.animalMethod(); // => I'm Scott and I'm an animal!

console.log(Animal.prototype.__proto__ === Object.prototype) // => true
console.log(Object.prototype.__proto__) // ==> null
