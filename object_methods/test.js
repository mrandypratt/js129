function MakeHeight(height) {
  this.height = height;
}

function Person(weight) {
  this.weight = weight;
  MakeHeight.call(this, "6ft");
}

let andy = new Person(185);

console.log(andy); // => Person { weight: 185, height: '6ft' }
