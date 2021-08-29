function pet(type, name) {
  return {
    type,
    name,
  };
}

function owner(name) {
  return {
    name,
    pets: [],
    
    numberOfPets() {
      return this.pets.length;
    },
  };
}

function shelter() {
  return {
    adoptions: {},
    
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
}

let butterscotch = pet('cat', 'Butterscotch');
let pudding      = pet('cat', 'Pudding');
let darwin       = pet('bearded dragon', 'Darwin');
let kennedy      = pet('dog', 'Kennedy');
let sweetie      = pet('parakeet', 'Sweetie Pie');
let molly        = pet('dog', 'Molly');
let chester      = pet('fish', 'Chester');

let phanson = owner('P Hanson');
let bholmes = owner('B Holmes');

let humaneSociety = shelter();
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