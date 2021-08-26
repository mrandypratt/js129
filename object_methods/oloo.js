let animalPrototype = {
  init(name) {
    this.name = name;
    return this;
  },
  animalMethod: function() {
    console.log(`I'm ${this.name} and I'm an animal!`);
  }
};

let dogPrototype = Object.create(animalPrototype);
dogPrototype.dogMethod = function() {
  console.log(`I'm ${this.name} and I'm an Dog!`);
};

let terrierPrototype = Object.create(dogPrototype);
terrierPrototype.terrierMethod = function() {
  console.log(`I'm ${this.name}. Yip, yip!`);
};

// Use of prototypes still allows classes to work
let scottTheTerrier = Object.create(terrierPrototype).init("Scott");
scottTheTerrier.terrierMethod(); // => I'm Scott. Yip, yip!
scottTheTerrier.dogMethod(); // => I'm Scott and I'm an Dog!
scottTheTerrier.animalMethod(); // => I'm Scott and I'm an animal!
