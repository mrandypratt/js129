let obj = {
  key1: "value1",
  key2: "value2",
}
// Keys is good for iterating over enumerable properties
let keys = Object.keys(obj) // =>  [ 'key1', 'key2' ]
console.log(keys)

// getOwnPropertyNames will return non-enumerable properties too
console.log(Object.getOwnPropertyNames(obj)); // =>  [ 'key1', 'key2' ]
console.log(Object.getOwnPropertyNames(keys)); // =>  [ '0', '1', 'length' ]


console.log("key1" in obj); // => true
console.log("length" in keys); // => true
console.log("hasOwnProperty" in obj); // => true

console.log(obj.hasOwnProperty("key1")); // => true
console.log(keys.hasOwnProperty("length")); // => true
console.log(obj.hasOwnProperty("hasOwnProperty")); // => false