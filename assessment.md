# Assessment Study Guide

## OOP
Object-Oriented Programming
: Organizing programs in terms of objects which have *state* and *behavior* (aka properties and methods) and interact with one another.
### Pros:
- Higher abstraction level
- Easier to create, understand, and update programs
- Less Dependencies
### Cons:
- Larger
- Less efficient
- 
## Encapsulation
encapsulation
: Bundling State and behavior to form an object.
### Benefits of Encapsulation
- Makes code more intuitive and easy to understand by keeping related data together
- Creates **public interface** through which to access an object (note: JS doesn't provide access restrictions)
NOTE: Public interface is not necessary due to the limitations of JavaScript.  Using methods to change properties rather than accessing them directly is recommended.

## Collaborator Objects
Collaborators
: Objects which provide state within another object
```javascript
let cat = {
  name: 'Fluffy',
};

let pete = {
  pet: cat, // Collaborator Object stored as State
  printCatName() { console.log(this.pet.name); }
};

pete.printCatName(); // => Fluffy
```
### Choosing Collaborators
When creating Classes and properties, be sure to think about what objects will collaborate and whether their collaboration makes sense

## Object Factories
Object Factory
: Function which returns a new object which a pre-defined structure (**type**)
### Pros:
- Reduce repetitive code
- Creates new objects with same structure which do not share memory
- Can create self-referential methods using `this` keyword

```javascript
function createCar(fuelLevel) {
  return {
    fuelLevel: fuelLevel,
    
    displayFuelLevel() {
      console.log(this.fuelLevel)
    },
    
    drive() {
      this.fuelLevel -= 0.1;
    },
  };
}

let jaguar = createCar(0.5);
jaguar.drive();
jaguar.displayFuelLevel(); // => 0.4
```

## Objects
### Property Access:
- **Member Access Notation**: "Dot Notation" - Must be a string with no spaces or dashes
- **Computed Member Access Notation**: "Bracked Notation" - Will compute value and convert to string
### Determining Property Existence:
- `in`: Returns true if property exists in the object's prototypal chain, whether or not enumerable
- `hasOwnProperty`: Returns Boolean indicating if object owns property, whether or not enumerable
- `Object.getOwnPropertyNames()`: Returns Array of all owned properties, including non-enumerable (length, name). Good for JS inner workings, not for iterating over values
- `Object.keys()`: Returns array of only owned, enumerable properties

```javascript
let keys = Object.keys(myObject)       //  [ '7', 'false', '1,2,3', 'a-key' ]
Object.getOwnPropertyNames(keys)       //  [ 'length', '7', 'false', '1,2,3', 'a-key' ]

"false" in myObject                    // true
"true" in myObject                     // false

myObject.hasOwnProperty("7")           // true
myObject.hasOwnProperty("8")           // false
```

## Prototypal Inheritance
prototype
: An object from which another obect inherits properties/methods

All objects are created with a `[[Prototype]]` value, which can point to another object or `null`
- All objects created in the global scope default to `Object.prototype` as their `[[Prototype]]` value
- `Object.prototype` has a `[[Prototype]]` value set to `null`
- `[[Prototype]]` values can be set or altered using methods or changing property values
- `Object.getPrototypeOf(obj)` or `obj.__proto__` can be used to determine `[[Prototype]]` value of a given `obj` 

### Types of Prototypal Inheritance:
- `Object.create()`: Creates new object with `[[Prototype]]` explicitly set to a particular object
- `Object.setPrototypeOf()`: Reassigns `[[Prototype]]` property to a new object

### Property Selection
Unlike `Object.assign` which overwrites properties with same names, prototypal chaining allows each object to carry a unique value.
```javascript
// Two objects are chained together with different "prop" values

let proto = { prop: "Prototype Value" };
let instance = { prop: "Instance Value" };

Object.setPrototypeOf(instance, proto);

// "prop" holds its value for each object independently.

console.log(proto);  // => { prop: 'Prototype Value' }
console.log(instance);  // => { prop: 'Instance Value' }

// With no owned "prop" value, the chain goes to the immediate next object up in the chain

let newInstance = Object.create(instance);

console.log(newInstance);  // => {}
console.log(newInstance.prop);  // => Instance Value

// When a new "prop" value is created on an instance, it can only modify or create an owned property

newInstance.prop = "Something Absolutely Different";

console.log(proto);  // => { prop: 'Prototype Value' }
console.log(instance);  // => { prop: 'First Instance Value' }
console.log(newInstance);  // => { prop: 'Something Absolutely Different' }

### 
```

## Functions
Creating Functions:
### Function Declaration
Using `function` as first word to declare 
Benefits:
- Hoisting: can invoke a function before it is defined
- Named: able to refer to the function by name
### Function Expressions:
Non-Function Declarations
Examples:
- Variable Assignment (`let exp = function() {}`)
- Pass to another Function (`[1, 2, 2].forEach(function(elem) {})`)
- Return to caller (`function passBack() { return function() {} }`)
- Arrow Functions (`(a) => a * 2`)
Function Expressions Can be anynomous (`let exp = function() {}`) or named (`let exp = function funName() {}`)
### First-Class Functions:
Ability to assign functions to variables and properties, pass them to functions, or return from other functions
All JavaScript funcitons are First-Class
```javascript
function say() { console.log("Say") }
let speak = say; // First-Class: function passed as value
speak(); // Invocation: function expression invoked using Function Invocation Syntax
```
### Higher-Order Functions
Higher-Order Functions
: either accepts a function as argument or returns a function

## `global`


## Constructors
## Prototypes
## OLOO
## ES6 Classes
## Methods
## Properties
## Instance Methods
## Static Methods
## Pseudo-Classical Inheritance
## Polymorphism
## Single Inheritance
## Multiple Inheritance
## Mix-ins
## Method Invocation
## Method/Property Lookup Chain
## Function Execution Context
## `this`
## Implicit Execution Context
## Explicit Execution Context
## Context Loss



