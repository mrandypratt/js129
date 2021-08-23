// console.log(global) // => global object
console.log(global.__proto__) // => {}
console.log(global.__proto__.__proto__) // => {}
console.log(global.__proto__.__proto__.__proto__) // => null

console.log(Object.getOwnPropertyNames(global.__proto__)) // => [ 'constructor' ]
console.log(Object.getOwnPropertyNames(global.__proto__.__proto__)) // => Object.prototype properties
// console.log(Object.getOwnPropertyNames(global.__proto__.__proto__.__proto__)) // => TypeError: Cannot convert undefined or null to object


console.log(global.constructor)  // => [ Function: Object]
console.log(global.constructor.__proto__)  // => [ Function]

console.log(global.constructor.constructor)  // => [ Function: Function]
console.log(global.constructor.constructor.__proto__)  // => [ Function]

console.log(global.__proto__.constructor)  // => [ Function: Object]
console.log(global.__proto__.__proto__.constructor) // =>  [ Function: Object]
// console.log(global.__proto__.__proto__.__proto__.constructor) // => TypeError: Cannot read property of null
// console.log(global)
// console.log(global)