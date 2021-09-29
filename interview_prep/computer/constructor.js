function Computer(brand) {
  this.brand = brand;
}

Computer.prototype.openBrowser = function openBrowser() {
  console.log("Browser is open");
};

function Dell() {
  Computer.call(this, "Dell");
  this.pluggedHDMI = false;
}

Dell.prototype = Object.create(Computer.prototype);
Dell.prototype.constructor = Computer.prototype;
Dell.prototype.plugHDMI = function plugHDMI() {
  this.pluggedHDMI = true;
}

Dell.prototype.openBrowser = function openBrowser() {
  console.log("Chrome is open");
};

let comp = new Dell();
console.log(comp);
comp.plugHDMI();
console.log(comp)
comp.openBrowser();
console.log(comp instanceof Dell)