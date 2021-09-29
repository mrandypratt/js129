class Computer {
  constructor(brand){
    this.brand = brand;
  }
  
  openBrowser() {
    if (this instanceof MacbookAir) {
      
    }
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


let myComp = new DellXPS();
console.log(myComp);
myComp.openBrowser();