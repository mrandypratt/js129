/*

Unlike Object.assign() which overwrites common properties, 
Prototypal inheritance allows each object in the chain to hold its own value
for identical property names.

*/

let proto = { prop: "Prototype Value" };

let instance = { prop: "First Instance Value" };

Object.setPrototypeOf(instance, proto);

console.log(proto);  // => { prop: 'Prototype Value' }
console.log(instance);  // => { prop: 'First Instance Value' }

let newInstance = Object.create(instance);

console.log(newInstance);  // => {}
console.log(newInstance.prop);  // => First Instance Value

newInstance.prop = "Something Absolutely Different";

console.log(proto);  // => { prop: 'Prototype Value' }
console.log(instance);  // => { prop: 'First Instance Value' }
console.log(newInstance);  // => { prop: 'Something Absolutely Different' }