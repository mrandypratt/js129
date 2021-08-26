function Car(make, model) {
  this.make = make;
  this.model = model;

  this.drive = function() {
    this.started = true;
  };

  // rest of the methods
}

let truck = new Car("chevy", "s10")
console.log(truck)
console.log(truck.__proto__ === Car.prototype); // => true
console.log(truck.constructor); // => [Function: Car]
console.log(truck.constructor === Car); // => true
console.log(truck instanceof Car); // => true

cons