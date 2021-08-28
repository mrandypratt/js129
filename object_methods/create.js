/*

This is a test for object property access using:
Object.create()

*/

let prototype = {
  pro: "Prototype Property",
}

let instance = Object.create(prototype);
instance.inst = "Instance Property";

// When logged, the object only log the properties added directly to that specific object

console.log(instance);  // => { inst: 'Instance Property' }
console.log(prototype);  // => { pro: 'Prototype Property' }

// Accessing properties in instance extends to the properties of the prototype

console.log(instance.pro);  // => Prototype Property
console.log(instance.inst);  // => Instance Property
console.log(prototype.pro);  // => Prototype Property
console.log(prototype.inst);  // => undefined

// hasOwnProperty() ignores the prototype chain
// instance does not own the 'pro' property

instance.hasOwnProperty('pro')  // => false
instance.hasOwnProperty('inst')  // => true
prototype.hasOwnProperty('pro')  // => true
prototype.hasOwnProperty('inst')  // => false

// the "in" operator takes the prototype chain into account
// The 'pro' property is in the prototypal chain for instance

"pro" in instance  // => true
"inst" in instance  // => true
"pro" in prototype  // => true
"inst" in prototype  // => false

// Prototypal inherited properties are not enumerable for the inherting object

instance.propertyIsEnumerable('pro')  // => false
instance.propertyIsEnumerable('inst')  // => true
prototype.propertyIsEnumerable('pro')  // => true
prototype.propertyIsEnumerable('inst')  // => false

// Object.keys() extracts all enumerable properties

Object.keys(instance)  // => [ 'inst' ]
Object.keys(prototype)  // => [ 'pro' ]

// Object.getOwnPropertyNames() pulls both enumerable and non-enumerable properties
// Objects by default do not have non-enumerable properties (i.e. length)
// Functions and Arrays however will have non-enumerable properties

Object.getOwnPropertyNames(instance)  // => [ 'inst' ]
Object.getOwnPropertyNames(prototype)  // => [ 'pro' ]