// Factory Function
function vehicleFactory(make, model, wheels) {
  return {
    make,
    model,
    wheels,
  
    getWheels() {
      return this.wheels;
    },
  
    info() {
      return `${this.make} ${this.model}`;
    },
  };
}

function carFactory(make, model) {
  return vehicleFactory(make, model, 4);
}

function motorcycleFactory(make, model) {
  return vehicleFactory(make, model, 2);
}

function truckFactory(make, model, payload) {
  let truck = vehicleFactory(make, model, 4);
  truck.payload = payload;
  return truck;
}

let factoryCar = carFactory("Factory", "Car");
let factoryMotorcycle = motorcycleFactory("Factory", "Motorcycle");
let factoryTruck = truckFactory("Factory", "Truck", "200 Tons");

console.log(factoryCar.info()); // => Factory Car
console.log(factoryCar.getWheels()); // => 4
console.log(factoryMotorcycle.info()); // => Factory Motorcycle
console.log(factoryMotorcycle.getWheels()); // => 2
console.log(factoryTruck.info()); // => Factory Truck
console.log(factoryTruck.getWheels()); // => 4

// OLOO (Prototypal)
let vehiclePrototype = {
  init(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
    return this;
  },
  
  getWheels() {
    return this.wheels;
  },

  info() {
    return `${this.make} ${this.model}`;
  },
};

let carMethods = {
  init(make, model) {
    vehiclePrototype.init.call(this, make, model, 4);
    return this;
  }
};

let carPrototype = Object.assign(Object.create(vehiclePrototype), carMethods);

let motorcycleMethods = {
  init(make, model) {
    vehiclePrototype.init.call(this, make, model, 2);
    return this;
  }
};

let motorcyclePrototype = Object.assign(Object.create(vehiclePrototype), motorcycleMethods);

let truckMethods = {
  init(make, model, payload) {
    vehiclePrototype.init.call(this, make, model, 4);
    this.payload = payload;
    return this;
  }
};

let truckPrototype = Object.assign(Object.create(vehiclePrototype), truckMethods);

let carInstance = Object.create(carPrototype).init("OLOO", "Car");
let motorcycleInstance = Object.create(motorcyclePrototype).init("OLOO", "Motorcycle");
let truckInstance = Object.create(truckPrototype).init("OLOO", "Truck", "200 Tons");

console.log(carInstance.info()); // => OLOO Car
console.log(carInstance.getWheels()); // => 4
console.log(motorcycleInstance.info()); // => OLOO Motorcycle
console.log(motorcycleInstance.getWheels()); // => 2
console.log(truckInstance.info()); // => OLOO Truck
console.log(truckInstance.getWheels()); // => 4


// Construtors / Prototypes (Pseudo-Classical)
function VehicleConstructor(make, model, wheels) {
  this.make = make;
  this.model = model;
  this.wheels = wheels;
}

VehicleConstructor.prototype = {
  getWheels() {
    return this.wheels;
  },

  info() {
    return `${this.make} ${this.model}`;
  },
};

function CarConstructor(make, model) {
  VehicleConstructor.call(this, make, model, 4);
}

CarConstructor.prototype = Object.create(VehicleConstructor.prototype);

function MotorcycleConstructor(make, model) {
  VehicleConstructor.call(this, make, model, 2);
}

MotorcycleConstructor.prototype = Object.create(VehicleConstructor.prototype);

function TruckConstructor(make, model, payload) {
  VehicleConstructor.call(this, make, model, 4);
  this.payload = payload;
}

TruckConstructor.prototype = Object.create(VehicleConstructor.prototype);

let carConstructor = new CarConstructor("Constructor", "Car");
let motorcycleConstructor = new MotorcycleConstructor("Constructor", "Motorcycle");
let truckConstructor = new TruckConstructor("Constructor", "Truck", "200 Tons");

console.log(carConstructor.info()); // => Constructor Car
console.log(carConstructor.getWheels()); // => 4
console.log(motorcycleConstructor.info()); // => Constructor Motorcycle
console.log(motorcycleConstructor.getWheels()); // => 2
console.log(truckConstructor.info()); // => Constructor Truck
console.log(truckConstructor.getWheels()); // => 4

// ES6 Classes (Pseudo-Classical)
class VehicleClass {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  
  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class CarClass extends VehicleClass {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class MotorcycleClass extends VehicleClass {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class TruckClass extends VehicleClass {
  constructor(make, model, payload) {
    super(make, model, 4);
    this.payload = payload;
  }
}

let carClass = new CarClass("ES6Classes", "Car");
let motorcycleClass = new MotorcycleClass("ES6Classes", "Motorcycle");
let truckClass = new TruckClass("ES6Classes", "Truck", "200 Tons");

console.log(carClass.info()); // => ES6Classes Car
console.log(carClass.getWheels()); // => 4
console.log(motorcycleClass.info()); // => ES6Classes Motorcycle
console.log(motorcycleClass.getWheels()); // => 2
console.log(truckClass.info()); // => ES6Classes Truck
console.log(truckClass.getWheels()); // => 4

