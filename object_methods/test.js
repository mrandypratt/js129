let arr = [1, 2, 3];

console.log(arr.hasOwnProperty("forEach"));  // => false
console.log(Array.prototype.hasOwnProperty("forEach"));  // => true
console.log(Object.getPrototypeOf(arr) === Array.prototype);  // => true
console.log("forEach" in arr);  // => true
