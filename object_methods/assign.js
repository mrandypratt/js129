/*

This is a test for object property access using:
Object.assign()

This method takes a target and applies a variable number of sources to it.

EX: Object.assign(target, ...sources) // Returns Modified target

*/


// Object.assign() takes a target and applies a variable number of sources to it.
// EX: Object.assign(target, ...sources) // Returns Modified target

let source = {
  src: 'Source Property',
}

let target = {};
Object.assign(target, source);
target.trg = "Target Property";

console.log(target);  // => { src: 'Source Property', trg: 'Target Property' }
console.log(source);  // => { src: 'Source Property' }

// Changing the source property after assignment does not matter for primitive types

source.src = "Something Different";

console.log(target);  // => { src: 'Source Property', trg: 'Target Property' }
console.log(source);  // => { src: 'Something Different' }

// Object.assign overwrites similar property names with the source's value

source.src = ['Value']
Object.assign(target, source);

console.log(target);  // => { src: [ 'Value' ], trg: 'Target Property' }
console.log(source);  // => { src: [ 'Value' ] }

// Assign uses shallow copies, so references in the target still point to the source
// Updating a non-primitive in the source will affect the target

source.src[0] = "Something Different";

console.log(target);  // => { src: [ 'Something Different' ], trg: 'Target Property' }
console.log(source);  // => { src: [ 'Something Different' ] }
