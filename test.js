/*



*/

function example () {
  return {
    a: "A",
    crazyMethod() {
      console.log("yayaya");
    }
  };
}

let example1 = example();

console.log(Object.keys(example1));