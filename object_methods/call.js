// Passing in an existing object to add/update properties

function PutOnShirt(color, sleeveLength) {
  this.color = color;
  this.sleeveLength = sleeveLength;
  this.wearingShirt = true;
  this.greeting = function() {
    return `Hi. I'm ${this.name} and I'm wearing a ${this.sleeveLength}-sleeved, ${this.color} shirt!`;
  }
}

function Person(name, wearingShirt = false) {
  this.name = name;
  this.wearingShirt = wearingShirt;
}

let andy = new Person("Andy");

console.log(andy.wearingShirt); // => false
PutOnShirt.call(andy, "blue", "long"); // => returns undefined (function has no return value)
console.log(andy.greeting()); // => "Hi. I'm Andy and I'm wearing a long-sleeved, blue shirt!"
console.log(andy.wearingShirt) // => true

console.log(andy.constructor); // => returns [Function: Person]
console.log(andy.__proto__); // => Person {}
console.log(andy.__proto__ === Person.prototype); // => true




