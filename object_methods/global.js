// console.log(global) // => global object
console.log(Object.getPrototypeOf(global)) // => {}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(global)) === Object.prototype) // => true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(global))) === null) // => true

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(global))) // => [ 'constructor' ]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Object.getPrototypeOf(global)))) // => Object.prototype properties

console.log(global.constructor)  // => [ Function: Object]
console.log(Object.getPrototypeOf(global.constructor))  // => [ Function ]

console.log(global.constructor.constructor)  // => [ Function: Function]
console.log(Object.getPrototypeOf(global.constructor.constructor))  // => [ Function ]

console.log(Object.getPrototypeOf(global).constructor)  // => [ Function: Object ]
console.log(Object.getPrototypeOf(Object.getPrototypeOf(global)).constructor) // =>  [ Function: Object ]
// console.log(global.__proto__.__proto__.__proto__.constructor) // => TypeError: Cannot read property of null
// console.log(global)
// console.log(global)