let pet = {
  init(type, name) {
    this.type = type;
    this.name = name;
    return this;
  },
};

let owner = {
  init(name) {
    this.name = name;
    this.pets = [];
    return this;
  },
  
  numberOfPets() {
    return this.pets.length;
  },
};

let shelter = {
  init() {
    this.adoptions = {};
    return this;
  },
  
  adopt(owner, pet) {
    if (!this.adoptions[owner.name]) {
      this.adoptions[owner.name] = [];
    }
    owner.pets.push(pet);
    this.adoptions[owner.name].push(pet);
  },
  
  printAdoptions() {
    for (let owner in this.adoptions) {
      console.log(`${owner} has adopted the following pets:`);
      this.adoptions[owner].forEach(pet => {
        console.log(`a ${pet.type} named ${pet.name}`);
      });
      console.log();
    }
  },
};

let butterscotch = Object.create(pet).init('cat', 'Butterscotch');
let pudding      = Object.create(pet).init('cat', 'Pudding');
let darwin       = Object.create(pet).init('bearded dragon', 'Darwin');
let kennedy      = Object.create(pet).init('dog', 'Kennedy');
let sweetie      = Object.create(pet).init('parakeet', 'Sweetie Pie');
let molly        = Object.create(pet).init('dog', 'Molly');
let chester      = Object.create(pet).init('fish', 'Chester');

let phanson = Object.create(owner).init('P Hanson');
let bholmes = Object.create(owner).init('B Holmes');

let humaneSociety = Object.create(shelter).init();
humaneSociety.adopt(phanson, butterscotch);
humaneSociety.adopt(phanson, pudding);
humaneSociety.adopt(phanson, darwin);
humaneSociety.adopt(bholmes, kennedy);
humaneSociety.adopt(bholmes, sweetie);
humaneSociety.adopt(bholmes, molly);
humaneSociety.adopt(bholmes, chester);
humaneSociety.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);