let proto = {
  pro: "Prototype Property",
}

let instance = {
  inst: "Instance Property",
};

console.log(Object.getPrototypeOf(instance)) // => {}
console.log(Object.getPrototypeOf(instance) === proto) // => false

Object.setPrototypeOf(instance, proto)

// Prototype of "instance" is now "proto"

console.log(Object.getPrototypeOf(instance)) // => { pro: 'Prototype Property' }
console.log(Object.getPrototypeOf(instance) === proto) // => true

