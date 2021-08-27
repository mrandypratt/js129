function CreateObject(prop) {
  this.prop = prop;
  
  this.method = function() {
    console.log(`My property is ${this.prop}`);
  };
}

let regularObj = new CreateObject("Something regular");
let crazyObj = new CreateObject("CRAZINESS");

regularObj.method();
crazyObj.method();