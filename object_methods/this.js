function test() {
  
  // Determine this prototype chain
  console.log(this === global) // => [Object [global]]
  console.log(this.__proto__ === Function.prototype) // => {}
  console.log(this.__proto__.__proto__ === Object.prototype)  // => {}
  console.log(this.__proto__.__proto__.__proto__ === null)  // => null
  
  // Prototype is Object.prototype
  console.log(this === Object.prototype) // => false
  console.log(this.__proto__ === Object.prototype) // => false
  console.log(this.__proto__.__proto__ === Object.prototype) // => true
  
  //console.log(Object.getOwnPropertyNames(this)) // => global properties
  console.log(Object.getOwnPropertyNames(this.__proto__)) // => [ 'constructor' ]
  
  console.log(this === global) // => true
  console.log(this.__proto__ === global) // => false
  console.log(this.__proto__.__proto__ === global) // => false
  
  console.log(this === global.Object) // => false
  console.log(this.__proto__ === global.Object) // => false
  console.log(this.__proto__.__proto__ === global.Object) // => false
  
  console.log(this === global.Function)  // => false
  console.log(this.__proto__ === global.Function)  // => false
  console.log(this.__proto__.__proto__ === global.Function) // => false
  
  console.log(this.constructor === Object)  // => [Function: Object]
  console.log(this.constructor === Object) // => true
}

test()
