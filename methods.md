# Static Methods
## `Object.assign()`
assign
: Static Object method which applies the properties and methods of one Object to another
```javascript
Object.assign(target, ...sources) // Returns Modified target
```
Considerations:
- `target` is both mutated and returned
- For any key on `target`, the lastest source will overwrite the value
- Only copies *own properties* for both `target` and `source`
- If value is a reference, only a copy of reference is provided (Use Stringify to get deep copy)
```javascript
let mySheet = {
numbers: [1, 2, 3, 4]
}

let yourSheet = {}

Object.assign(yourSheet, mySheet);

console.log(mySheet.numbers === yourSheet.numbers); // => true

mySheet.numbers.pop();
console.log(yourSheet.numbers); // => false
```
## `Object.getOwnPropertyNames()`


## `Object.create()`

# Instance Methods
## `call`
## `apply`
## `bind`

# Built-In Constructors
## `Array`
## `Object`
## `String`
## `Number`