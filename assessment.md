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
- `in`
- `hasOwnProperty`
- `getOwnPropertyNames`
- `keys`
- 
```javascript
Object.keys(myObject)                  //  [ '7', 'false', '1,2,3', 'a-key' ]

"false" in myObject                    // true
"true" in myObject                     // false

myObject.hasOwnProperty("7")           // true
myObject.hasOwnProperty("8")           // false
 
```
## Constructors
## Prototypes
## OLOO
## ES6 Classes
## Methods
## Properties
## Instance Methods
## Static Methods
## Prototypal Inheritance
## Pseudo-Classical Inheritance

## Polymorphism
## Single Inheritance
## Multiple Inheritance
## Mix-ins
## Method Invocation
## Function Invocation
## Higher-Order Functions
## `global`
## Method/Property Lookup Chain
## Function Execution Context
## `this`
## Implicit Execution Context
## Explicit Execution Context
## Context Loss



