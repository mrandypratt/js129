// Factory Function
function animalFactory(name, age, legs, species, status) {
  return {
    name,
    age,
    legs,
    species,
    status,
    
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
    },
  };
}

function catFactory(name, age, status) {
  let cat = animalFactory(name, age, 4, "cat", status);
  cat.introduce = function introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;
  };
  return cat;
}

function dogFactory(name, age, status, master) {
  let dog = animalFactory(name, age, 4, "dog", status);
  dog.master = master;
  dog.greetMaster = function greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  };
  return dog;
}

let pepeFactory = catFactory("Pepe", 2, "angsty");
console.log(pepeFactory.introduce()); 
// => Hello, my name is Pepe and I am 2 years old and angsty. Meow meow!

let spotFactory = dogFactory("Spot", 3, "happy", "Hooman");
console.log(spotFactory.introduce());
// => Hello, my name is Spot and I am 3 years old and happy.
console.log(spotFactory.greetMaster());
// => Hello Hooman! Woof, woof!


// OLOO (Prototypal)
let animalOLOO = {
  init(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
    return this;
  },
  
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  },
};

let catMethods = {
  init(name, age, status) {
    animalOLOO.init.call(this, name, age, 4, "cat", status);
    return this;
  },
  
  introduce() {
    return animalOLOO.introduce.call(this) + " Meow meow!";
  },
};

let catOLOO = Object.assign(Object.create(animalOLOO), catMethods);

let dogMethods = {
  init(name, age, status, master) {
    animalOLOO.init.call(this, name, age, 4, "dog", status);
    this.master = master;
    return this;
  },
  
  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  },
};

let dogOLOO = Object.assign(Object.create(animalOLOO), dogMethods);

let pepeOLOO = Object.create(catOLOO).init("Pepe", 2, "angsty");
console.log(pepeOLOO.introduce()); 
// => Hello, my name is Pepe and I am 2 years old and angsty. Meow meow!

let spotOLOO = Object.create(dogOLOO).init("Spot", 3, "happy", "Hooman");
console.log(spotOLOO.introduce());
// => Hello, my name is Spot and I am 3 years old and happy.
console.log(spotOLOO.greetMaster());
// => Hello Hooman! Woof, woof!


// Construtors / Prototypes (Pseudo-Classical)
function AnimalConstructor(name, age, legs, species, status) {
  this.name = name;
  this.age = age;
  this.legs = legs;
  this.species = species;
  this.status = status;
}

AnimalConstructor.prototype.introduce = function introduce() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
};

CatConstructor.prototype = Object.create(AnimalConstructor.prototype);

function CatConstructor(name, age, status) {
  AnimalConstructor.call(this, name, age, 4, "cat", status);
}

CatConstructor.prototype.introduce = function introduce() {
  return `${AnimalConstructor.prototype.introduce.call(this)} Meow meow!`;
};

function DogConstructor(name, age, status, master) {
  AnimalConstructor.call(this, name, age, 4, "dog", status);
  this.master = master;
}

DogConstructor.prototype = Object.create(AnimalConstructor.prototype);

DogConstructor.prototype.greetMaster = function greetMaster() {
  return `Hello ${this.master}! Woof, woof!`;
};

let pepeConstructor = new CatConstructor("Pepe", 2, "angsty");
console.log(pepeConstructor.introduce()); 
// => Hello, my name is Pepe and I am 2 years old and angsty. Meow meow!

let spotConstructor = new DogConstructor("Spot", 3, "happy", "Hooman");
console.log(spotConstructor.introduce());
// => Hello, my name is Spot and I am 3 years old and happy.
console.log(spotConstructor.greetMaster());
// => Hello Hooman! Woof, woof!


// ES6 Classes (Pseudo-Classical)
class AnimalClass {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class CatClass extends AnimalClass {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  
  introduce() {
    return AnimalClass.prototype.introduce.call(this) + " Meow meow!";
  }
}

class DogClass extends AnimalClass {
  constructor (name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  
  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

let pepeClass = new CatClass("Pepe", 2, "angsty");
console.log(pepeClass.introduce()); 
// => Hello, my name is Pepe and I am 2 years old and angsty. Meow meow!

let spotClass = new DogClass("Spot", 3, "happy", "Hooman");
console.log(spotClass.introduce());
// => Hello, my name is Spot and I am 3 years old and happy.
console.log(spotClass.greetMaster());
// => Hello Hooman! Woof, woof!
