# Static Methods

## `Object.assign()`
Static Object method which applies the properties and methods of one Object to another
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
Returns an array of ALL properties (even non-enumerable)

Example Properties Returned:
- Arrays: lenth, indices
- Functions: name, prototype, length
- String: length, indices
- Object: Keys (no prototypes)
- Classes: Properties/Methods of class as well as any prototypes called on "super()"

Uses:
- Seeing under the hood to examine a class/object/function/other type
- NOT for iterating over values

## `Object.keys()`
Returns array of enumerable properties only

Uses:
- Iterating over the properties/methods in an object
- Abstracting away the inner workings of JS Objects

## `propertyIsEnumerable`
Instance method which returns Boolean if property is enumerable

## `hasOwnProperty`
Instance method which returns true only when object owns property (not in prototype chain)

## `in`
Operator which will return true if property is in the Object or its Prototype chain
NOTE: this is the only way to determine presence in prototype chain
NOTE: works with enumerable and non-enumerable properties

## `for...in`
Iterates over all enumerable properties including inherited enumerable properties
NOTE: `for...of` is for arrays and strings (iterable objects)

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