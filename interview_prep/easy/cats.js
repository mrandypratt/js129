// Factory Function
function petFactory(name, age) {
  return {
    name,
    age,
  };
}

function catFactory(name, age, fur) {
  let cat = petFactory(name, age);
  cat.fur = fur;
  cat.info = function info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
  };
  return cat;
}

let puddingFactory = catFactory('Pudding', 7, 'black and white');
let butterscotchFactory = catFactory('Butterscotch', 10, 'tan and white');

console.log(puddingFactory.info()); // => My cat Pudding is 7 years old and has black and white fur.
console.log(butterscotchFactory.info()); // => My cat Butterscotch is 10 years old and has tan and white fur.

// OLOO (Prototypal)
let petPrototype = {
  init(name, age) {
    this.name = name;
    this.age = age;
  }
};

let catPrototype = Object.create(petPrototype);

catPrototype.init = function init(name, age, fur) {
  petPrototype.init.call(this, name, age);
  this.fur = fur;
  return this;
};

catPrototype.info = function info() {
  return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
};

let puddingOLOO = Object.create(catPrototype).init('Pudding', 7, 'black and white');
let butterscotchOLOO = Object.create(catPrototype).init('Butterscotch', 10, 'tan and white');

console.log(puddingOLOO.info()); // => My cat Pudding is 7 years old and has black and white fur.
console.log(butterscotchOLOO.info()); // => My cat Butterscotch is 10 years old and has tan and white fur.

// Construtors / Prototypes (Pseudo-Classical)
function PetConstructor(name, age) {
  this.name = name;
  this.age = age;
}

function CatConstructor(name, age, fur) {
  PetConstructor.call(this, name, age);
  this.fur = fur;
}
  
CatConstructor.prototype.info = function info() {
  return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
};

let puddingConstructor = new CatConstructor('Pudding', 7, 'black and white');
let butterscotchConstructor = new CatConstructor('Butterscotch', 10, 'tan and white');

console.log(puddingConstructor.info()); // => My cat Pudding is 7 years old and has black and white fur.
console.log(butterscotchConstructor.info()); // => My cat Butterscotch is 10 years old and has tan and white fur.


// ES6 Classes (Pseudo-Classical)
class PetClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class CatClass extends PetClass {
  constructor(name, age, fur) {
    super(name, age);
    this.fur = fur;
  }
  
  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
  }
}

let puddingClass = new CatClass('Pudding', 7, 'black and white');
let butterscotchClass = new CatClass('Butterscotch', 10, 'tan and white');

console.log(puddingClass.info()); // => My cat Pudding is 7 years old and has black and white fur.
console.log(butterscotchClass.info()); // => My cat Butterscotch is 10 years old and has tan and white fur.


