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
  
  openBrowser() {
    console.log("Safari is open");
  }
}

class DellXPS extends Computer {
  constructor() {
    super("Dell");
    this.pluggedHDMI = false;
  }
  
  openBrowser() {
    console.log("Edge is open");
  }
}

let myComp = new DellXPS();
console.log(myComp);
myComp.openBrowser();