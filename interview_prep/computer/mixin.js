class Computer {
  constructor(brand){
    this.brand = brand;
  }
  
  openBrowser() {
    console.log("Browser is open");
  }
}

class MacbookAir extends Computer {
  constructor() {
    super("Apple");
  }
}

class DellXPS extends Computer {
  constructor() {
    super("Dell");
    this.pluggedHDMI = false;
  }
}

let hasHDMI = {
  plugInHDMI() {
    this.pluggedHDMI = true;
  }
};

Object.assign(DellXPS.prototype, hasHDMI);

let myComp = new DellXPS("Apple");
console.log(myComp);
console.log(myComp.pluggedHDMI);
myComp.plugInHDMI();
console.log(myComp.pluggedHDMI);
