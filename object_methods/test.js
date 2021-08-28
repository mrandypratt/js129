// run `node index.js` in the terminal

// Define Prototype of all characters

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = this.rollDice();
    this.intelligence = this.rollDice();
  }

  rollDice() {
    return Math.floor(Math.random() * 11 + 2);
  }

  heal(amount) {
    this.health += amount;
  }

  hurt(amount) {
    this.health -= amount;
  }
}

// Define sup-types of characters

class Warrior extends Character {
  constructor(name) {
    super(name);
    this.strength += 2;
  }
}

class Paladin extends Character {
  constructor(name) {
    super(name);
  }
}

class Magician extends Character {
  constructor(name) {
    super(name);
    this.intelligence += 2;
  }
}

class Bard extends Magician {
  constructor(name) {
    super(name);
  }

  createPotion() {
    return "Potion Created";
  }
}

// Create Mixin objects and assign to prototypes

let armorMethods = {
  attachArmor() {},
  removeArmor() {}
};

let spellCastingMethods = {
  castSpell(spell) {
    return spell;
  }
};

Object.assign(Warrior.prototype, armorMethods);
Object.assign(Paladin.prototype, armorMethods);
Object.assign(Paladin.prototype, spellCastingMethods);
Object.assign(Magician.prototype, spellCastingMethods);
Object.assign(Bard.prototype, spellCastingMethods);

let warrior = new Warrior('Warrior Name');
let paladin = new Paladin('Paladin Name');
let magician = new Magician('Magician Name');
let bard = new Bard('Bard Name');

console.log(warrior); // =>
// Warrior { name: 'Warrior Name', health: 100, strength: 13, intelligence: 3 }
console.log(paladin); // =>
// Paladin { name: 'Paladin Name', health: 100, strength: 2, intelligence: 11 }
console.log(magician); // =>
// Magician { name: 'Magician Name', health: 100, strength: 7, intelligence: 8 }
console.log(bard); // =>
// Bard { name: 'Bard Name', health: 100, strength: 10, intelligence: 8 }

console.log(Object.getPrototypeOf(warrior)); // =>
// Warrior { attachArmor: [Function: attachArmor],
//           removeArmor: [Function: removeArmor] }

console.log(Object.getPrototypeOf(paladin)); // =>
// Paladin { attachArmor: [Function: attachArmor],
//           removeArmor: [Function: removeArmor],
//           castSpell: [Function: castSpell] }

console.log(Object.getPrototypeOf(magician)); // =>
// Magician { castSpell: [Function: castSpell] }

console.log(Object.getPrototypeOf(bard)); // =>
// Bard { castSpell: [Function: castSpell] }

console.log(Bard.prototype); // =
console.log(Object.getPrototypeOf(bard).createPotion);  // => [Function: createPotion]
console.log(Object.getPrototypeOf(bard).createPotion()); // => Potion Created
console.log(bard.createPotion);  // => [Function: createPotion]
console.log(bard.createPotion()); // = > Potion Created

