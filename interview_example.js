// // Classes Example

// class Computer {
//   constructor(model, brand) {
//     this.model = model;
//     this.brand = brand;
//   }

//   displayInfo() {
//     console.log(`Hello! I am a ${this.model} made by ${this.brand}.`);
//   }
// }

// class Macbook extends Computer {
//   constructor(model) {
//     super(model, "Apple");
//   }

//   openSafari() {
//     console.log("Safari is Open!");
//   }
// }

// class PC extends Computer {
//   constructor(model, brand) {
//     super(model, brand);
//   }
  
//   openEdge() {
//     console.log("Microsoft Edge is open!");
//   }
// }



// let myComputer = new Computer("Macbook Pro", "Apple")
// myComputer.displayInfo();

// console.log(Object.getPrototypeOf(myComputer) === Computer.prototype);
// console.log(myComputer instanceof Computer);

// let myMacbook = new Macbook("Macbook Pro");
// myMacbook.displayInfo();
// myMacbook.openSafari();

// console.log(Object.getPrototypeOf(myMacbook) === Macbook.prototype);
// console.log(myMacbook instanceof Computer);
// console.log(myMacbook instanceof Macbook);

// let myPC = new PC("XPS15", "Dell");
// myPC.displayInfo();
// myPC.openEdge();

// console.log(Object.getPrototypeOf(myPC) === PC.prototype);
// console.log(myPC instanceof Computer);
// console.log(myPC instanceof PC);

// Mixin Example

class Computer {
  constructor(model, brand) {
    this.model = model;
    this.brand = brand;
  }

  displayInfo() {
    console.log(`Hello! I am a ${this.model} made by ${this.brand}.`);
  }
}

class MacbookPro extends Computer {
  constructor() {
    super("Macbook Pro", "Apple");
  }
}

class MacbookAir extends Computer {
  constructor() {
    super("Macbook Air", "Apple");
  }
}

class DellXPS extends Computer {
  constructor() {
    super("XPS", "Apple");
  }
}

class ChromeBook extends Computer {
  constructor() {
    super("Chromebook", "Google");
  }
}

let myComputer = new Computer("Macbook Pro", "Apple")
myComputer.displayInfo();

console.log(Object.getPrototypeOf(myComputer) === Computer.prototype);
console.log(myComputer instanceof Computer);

let myMacbook = new Macbook("Macbook Pro");
myMacbook.displayInfo();
myMacbook.openSafari();

console.log(Object.getPrototypeOf(myMacbook) === Macbook.prototype);
console.log(myMacbook instanceof Computer);
console.log(myMacbook instanceof Macbook);

let myPC = new PC("XPS15", "Dell");
myPC.displayInfo();
myPC.openEdge();

console.log(Object.getPrototypeOf(myPC) === PC.prototype);
console.log(myPC instanceof Computer);
console.log(myPC instanceof PC);
