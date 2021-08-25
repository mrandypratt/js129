## `Object.assign()`
Static Object method which applies the properties and methods of one Object to another
```javascript
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
```
Considerations:
- `target` is both mutated and returned
- For any key on `target`, the lastest source will overwrite the value
- Only copies *own properties* for both `target` and `source`
- If value is a reference, only a copy of reference is provided (Use Stringify to get deep copy)

## `Object.getOwnPropertyNames()`
Returns an array of ALL owned properties (even non-enumerable)

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
Instance method which returns true for owned, enumerable properties

## `in`
Operator which will return true for owned and inherited, enumerable and non-enumerable properties
NOTE: this is the only way to determine presence in prototype chain

## `for...in`
Iterates over all owned and inherited enumerable properties
NOTE: `for...of` is for arrays and strings (iterable objects)

## `Object.create()`
Creates a new object with a `[[Prototype]]` value set to the object passed in as "prototype"

```javascript
// Object.create() accepts a prototype object as argument and returns a new object which inherits from prototype

let prototype = {
  pro: "Prototype Property",
}

let instance = Object.create(prototype);
instance.inst = "Instance Property";

// When logged, the object only log the properties added directly to that specific object

instance  // => { inst: 'Instance Property' }
prototype  // => { pro: 'Prototype Property' }

// Accessing properties in instance extends to the properties of the prototype

instance.pro  // => Prototype Property
instance.inst  // => Instance Property
prototype.pro  // => Prototype Property
prototype.inst  // => undefined

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
```

## `Object.getPrototypeOf()` 
Returns value of `[[Prototype]]` property for an object.
NOTE: can use `obj.__proto__` to the same effect
```javascript
  pro: "Prototype Property",
}

let instance = Object.create(proto);
instance.inst = "Instance Property";

// Prototype of "instance" is "proto"

console.log(Object.getPrototypeOf(instance)) // => { pro: 'Prototype Property' }
console.log(Object.getPrototypeOf(instance) === proto) // => true

// The return value is the actual prototype object, which can then be used to access properties

console.log(Object.getPrototypeOf(instance).pro) // => Prototype Property

// The global object is the prototype of any object by default unless specified in declaration or reassigned

console.log(Object.getPrototypeOf(proto)) // => {}
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(proto))) // => 
// [ 'constructor', '__defineGetter__', '__defineSetter__', 'hasOwnProperty', '__lookupGetter__', 
//   '__lookupSetter__', 'isPrototypeOf', 'propertyIsEnumerable', 'toString', 'valueOf', '__proto__',
//   'toLocaleString' ]

// The global object has a [[Prototype]] value of null

console.log(Object.getPrototypeOf(Object.getPrototypeOf(proto))) // => null

// All the same works with Dudner Proto

console.log(instance.__proto__) // => { pro: 'Prototype Property' }
console.log(instance.__proto__ === proto) // => true
console.log(instance.__proto__.pro) // => Prototype Property
console.log(proto.__proto__) // => {}
console.log(Object.getOwnPropertyNames(proto.__proto__)) // => 
// [ 'constructor', '__defineGetter__', '__defineSetter__', 'hasOwnProperty', '__lookupGetter__', 
//   '__lookupSetter__', 'isPrototypeOf', 'propertyIsEnumerable', 'toString', 'valueOf', '__proto__',
//   'toLocaleString' ]

console.log(proto.__proto__.__proto__) // => null
```

## `Object.setPrototypeOf()`
Updates the `[[Prototype]]` property of a object to the desired prototype object
NOTE: Changing `[[Prototype]]` is discouraged in favor or using `Object.create()` to create a new object for performance reasons.
```javascript
let proto = {
  pro: "Prototype Property",
}

let instance = {
  inst: "Instance Property",
};

console.log(Object.getPrototypeOf(instance)) // => {}
console.log(Object.getPrototypeOf(instance) === proto) // => false

Object.setPrototypeOf(instance, proto)

// Prototype of "instance" is now "proto"

console.log(Object.getPrototypeOf(instance)) // => { pro: 'Prototype Property' }
console.log(Object.getPrototypeOf(instance) === proto) // => true
```

## `Function.prototype.call()`
Explicitly sets the execution context of a function to the first argument passed and passes all remaining arguments as arguments in the function being called.
```javascript
// Usage
function myFunct() {}
myFunct.call()
myFunct.call(thisArg)
myFunct.call(thisArg, arg1)
myFunct.call(thisArg, arg1, arg2)
myFunct.call(thisArg, arg1, ... , argN)
```
If `this` is in a function, you can pass the current value of `this` in with the new function invocation or pass another existing object
```javascript
function MakeHeight(height) {
  this.height = height;
}

function Person(weight) {
  this.weight = weight;
  MakeHeight.call(this, "6ft");
}

let andy = new Person(185);

console.log(andy); // => Person { weight: 185, height: '6ft' }
```

## `typeof`


# Instance Methods
## `call`
## `apply`
## `bind`

# Built-In Constructors
## `Array`
## `Object`
## `String`
## `Number`