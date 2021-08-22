
let proto = {
  pro: "Prototype Property",
}

let instance = Object.create(proto);
instance.inst = "Instance Property";

// Prototype of "instance" is "proto"

console.log(Object.getPrototypeOf(instance)) // => { pro: 'Prototype Property' }
console.log(Object.getPrototypeOf(instance) === proto) // => true

// The return value is the actual prototype object, which can then be used to access properties

console.log(Object.getPrototypeOf(instance).pro) // => Prototype Property

// The global object is the prototype of any object by default unless specified in declaration or reassigned

console.log(Object.getPrototypeOf(proto)) // => {}
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(proto))) // => 
// [ 'constructor', '__defineGetter__', '__defineSetter__', 'hasOwnProperty', '__lookupGetter__', 
//   '__lookupSetter__', 'isPrototypeOf', 'propertyIsEnumerable', 'toString', 'valueOf', '__proto__',
//   'toLocaleString' ]

// The global object has a [[Prototype]] value of null

console.log(Object.getPrototypeOf(Object.getPrototypeOf(proto))) // => null

// All the same works with Dudner Proto

console.log(instance.__proto__) // => { pro: 'Prototype Property' }
console.log(instance.__proto__ === proto) // => true
console.log(instance.__proto__.pro) // => Prototype Property
console.log(proto.__proto__) // => {}
console.log(Object.getOwnPropertyNames(proto.__proto__)) // => 
// [ 'constructor', '__defineGetter__', '__defineSetter__', 'hasOwnProperty', '__lookupGetter__', 
//   '__lookupSetter__', 'isPrototypeOf', 'propertyIsEnumerable', 'toString', 'valueOf', '__proto__',
//   'toLocaleString' ]

console.log(proto.__proto__.__proto__) // => null
