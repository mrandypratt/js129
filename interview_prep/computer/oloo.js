let computerPrototype = {
  init(brand) {
    this.brand = brand;
    return this;
  },
  
  openBrowser() {
    console.log("Browser is open");
  }
};

let dellXPSPrototype = Object.create(computerPrototype).init("Dell");

dellXPSPrototype.init = function init() {
  computerPrototype.init("Dell");
  this.pluggedHDMI = false;
  return this;
};

dellXPSPrototype.openBrowser = function openBrowser() {
  console.log("Edge is open");
};

dellXPSPrototype.plugHDMI = function plugHDMI() {
  this.pluggedHDMI = true;
};

let myComp = Object.create(dellXPSPrototype).init();
myComp.plugHDMI();
console.log(myComp);