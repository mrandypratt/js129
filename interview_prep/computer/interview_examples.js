// Inheritance Example

class Computer {
  constructor(brand) {
    this.brand = brand;
  }

  openBrowser() {
    console.log("Browser is open!");
  }
}

let myComp = new Computer("Dell");
console.log(myComp);
myComp.openBrowser();
console.log(myComp.hasOwnProperty("openBrowser"))
console.log(Computer.prototype.hasOwnProperty("openBrowser"))

// Mixin Example

class Computer {}

class MacbookAir extends Computer {}

class MacbookPro extends Computer {}

class DellXPS extends Computer{}

class ChromeBook extends Computer{}

let HDMIMethods = {
  plugInHDMI() {
    console.log("HDMI Plugged in!");
  }
}

Object.assign(DellXPS.prototype, HDMIMethods);
Object.assign(MacbookPro.prototype, HDMIMethods);

let myComp = new MacbookPro();
myComp.plugInHDMI();
console.log(myComp.hasOwnProperty("plugInHDMI"));
console.log(MacbookPro.prototype.hasOwnProperty("plugInHDMI"));

// new Keyword

function Computer(brand) {
  if (!(this instanceof Computer)) {
    return new Computer(brand);
  }
  this.brand = brand;
  this.openBrowser = function openBrowser() {
    console.log("Browser Open!");
  }
}

let myComp = Computer("Dell");
console.log(myComp);