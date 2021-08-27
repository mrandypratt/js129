// Determine this prototype chain
console.log(this) // => {}
console.log(this.__proto__ === Object.prototype) // => true
console.log(this.__proto__.__proto__ === null)  // => true

// Prototype is Object.prototype
console.log(this === Object.prototype) // => false
console.log(this.__proto__ === Object.prototype) // => true

console.log(Object.getOwnPropertyNames(this)) // => []
console.log(Object.getOwnPropertyNames(this.__proto__)) // => Object.prototype properties

console.log(this === global) // => false
console.log(this.__proto__ === global) // => false
console.log(this.__proto__.__proto__ === global) // => false

console.log(this === global.Object) // => false
console.log(this.__proto__ === global.Object) // => false
console.log(this.__proto__.__proto__ === global.Object) // => false

console.log(this === global.Function)  // => false
console.log(this.__proto__ === global.Function)  // => false
console.log(this.__proto__.__proto__ === global.Function) // => false

console.log(this.constructor)  // => [Function: Object]
console.log(this.constructor === global.Object) // => true


let foo = function() {
  console.log(this.toString())
}
