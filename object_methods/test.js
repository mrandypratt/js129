// Create Classes for the two overlapping methods
class FlyingBird {
  fly() { console.log("I can Fly!") }
}

class SwimmingBird {
  swim() { console.log("I can Swim!") }
}

// Create class to extend on class and assign the other class(es) to the prototype chain
class BothBird extends SwimmingBird {
  this.fly = FlyingBird.fly;
}

class Parrot extends FlyingBird {}

class Penguin extends SwimmingBird {}

class Duck extends BothBird {}

let flyer = new Parrot();
let swimmer = new Penguin();
let bother = new Duck();

flyer.fly()
swimmer.swim()
bother.swim()
console.log(bother)
console.log(Duck)
console.log("swim" in bother)
console.log("fly" in bother)
