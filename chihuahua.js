// *** FOUR PRIMARY CREATION PATTERNS *** (Include Instance vs Static)

// Factory Functions

function dogFactory(name, breed) {
  return {
    name,
    breed,
    greet() {
      return `Hello, Hooman! My name is ${this.name} and I'm a ${this.breed}`;
    }
  };
}

function chihuahuaFactory(name) {
  let dog = dogFactory(name, "Chihuahua");
  dog.barkAtDoorbell = function barkAtDoorbell() {
    return "Bark, Bark! Yip, Yip!";
  };
  return dog;
}

function terrierFactory(name) {
  let dog = dogFactory(name, "Terrier");
  return dog;
}

let jojo = chihuahuaFactory("Jojo");
let otherDog = dogFactory("Spot", "Terrier");
console.log()
console.log(jojo.greet());
console.log(jojo.barkAtDoorbell());

// OLOO (Prototypal Inheritance)
let dogPrototype = {
  init(name, breed) {
    this.name = name;
    this.breed = breed;
    return this;
  },

  greet() {
    return `Hello, Hooman! My name is ${this.name} and I'm a ${this.breed}`;
  }
}

let chihuahuaPrototype = Object.create(dogPrototype);

chihuahuaPrototype.init = function init(name) {
  dogPrototype.init.call(this, name, "Chihuahua");
  return this;
};

chihuahuaPrototype.barkAtDoorbell = function barkAtDoorbell() {
  return "Bark, Bark! Yip, Yip!";
}

let jojo = Object.create(chihuahuaPrototype).init("Jojo");
console.log(jojo.greet());
console.log(jojo.barkAtDoorbell());
console.log(jojo);

console.log(Object.getPrototypeOf(jojo) === chihuahuaPrototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(jojo)) === dogPrototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(jojo))) === Object.prototype);

// Constructors & Prototypes (Pseudo-Classical)
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.greet = function greet() {
  return `Hello, Hooman! My name is ${this.name} and I'm a ${this.breed}`;
};

function Chihuahua(name) {
  Dog.call(this, name, "Chihuahua");
}

Chihuahua.prototype = Object.create(Dog.prototype);
Chihuahua.prototype.constructor = Chihuahua;

Chihuahua.prototype.barkAtDoorbell = function barkAtDoorbell() {
  return "Bark, Bark! Yip Yip!";
}

let jojo = new Chihuahua("Jojo");

let newDog = new Dog("Spot", "Terrier");
console.log(newDog.constructor);

// console.log(Object.getPrototypeOf(jojo));
// console.log(jojo.constructor);
console.log(jojo);
console.log(jojo.greet());
console.log(jojo.barkAtDoorbell());
console.log(jojo instanceof Chihuahua);
console.log(jojo instanceof Dog);
console.log(jojo.constructor);
console.log(jojo.constructor.constructor);
console.log(jojo.constructor.constructor.constructor);

// jojo => Chihuahua.prototype => Dog.prototype => Object.prototype => null

// ES6 Classes (Pseudo-Classical)
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  greet() {
    return `Hello, Hooman! My name is ${this.name} and I'm a ${this.breed}`;
  }
}

class SmallShakingDog extends Dog {
  constructor (name, breed) {
    super(name, breed);
  }
}

class Chihuahua extends SmallShakingDog {
  constructor(name) {
    super(name, "Chihuahua");
  }

  barkAtDoorbell() {
    return "Bark, Bark! Yip Yip!";
  }
}

let jojo = new Chihuahua("Jojo");

console.log(jojo);
console.log(jojo.greet());
console.log(jojo.barkAtDoorbell());
console.log(jojo.constructor.prototype.constructor)

// *** CONTEXT LOSS ***
// 3
// - nested functions
//   - arrow function
//   - self = this
//   - bind
//   - call/apply

// - function argument
//   - arrow function
//   - thisArg
//   - bind
//   - self = this

// - copied method out of context
//   - add another parameter with context
//   - bind



// *** ADDITIONAL OOP TOOLS *** 

// Mixin

// Polymorphism
class WalkingBeings {
  walk () {
    return `I'm Walking with my ${this.footType}`;
  }
}
class Human extends WalkingBeings {
  walk() {
    return "I'm walking with my feet";
  }
}

class Duck extends WalkingBeings {
  constructor(footType) {
    super(footType)
  }
}

let duckie = new Duck();
let person = new Human();

console.log(duckie.walk());
console.log(person.walk());

// New Example

class Macbook {
  constructor(model) {
    this.model = model;
  }
}

class MacbookAir extends Macbook {
  constructor() {
    super("Air");
  }
}

let HDMIDevice = {
  hasHDMI: "yes",
  plugInHDMI() {
    console.log("HDMI Plugged, mane");
  },
}

Object.assign(MacbookAir.prototype, HDMIDevice);
let myMac = new MacbookAir();
console.log(myMac);
console.log(myMac.constructor);
console.log()
myMac.plugInHDMI();


