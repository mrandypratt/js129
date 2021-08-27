# Assessment Study Guide

## OOP
Object-Oriented Programming
: Organizing programs in terms of objects which have **state** and **behavior** (aka properties and methods) and interact with one another.
### Pros:
- Higher level of abstraction
- Easier to create, comprehend, and update programs
- Less Dependencies
### Cons:
- Generally larger programs
- Less memory-efficient
## Encapsulation
The bundling related state and behavior into an object.
- Makes code more intuitive and easy to understand by keeping related data together
- Creates a **public interface** through which to access an object
Implementation:
- JS doesn't offer access restrictions (i.e. private properties).
- Using methods to change properties rather than accessing them directly is recommended.

## Collaborator Objects
Objects which provide state within another object.
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

## Object Factories
Object Factory
: Function which returns a new object which a pre-defined structure (**type**)
### Pros:
- Reduce repetitive code
- Creates new objects with same structure which do not share memory
- Can create self-referential methods using `this` keyword
### Cons:
- Not memory efficient (all properties have full copies on each instance)
- Not compatible with the `instanceof` operator to determine type.

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
- **Member Access Notation**: "Dot Notation" - Must be a string with no spaces or dashes (i.e. `obj.prop`).
- **Computed Member Access Notation**: "Bracked Notation" - Will compute value and convert to string (i.e. `obj['prop']`).
### Determining Property Existence:
- `in`: Returns true if property exists in the object's prototypal chain, whether or not enumerable
- `hasOwnProperty`: Returns Boolean indicating if object owns property, whether or not enumerable
- `Object.getOwnPropertyNames()`: Returns Array of all owned properties, including non-enumerable (length, name). Good for JS inner workings, not for iterating over values
- `Object.keys()`: Returns array of only owned, enumerable properties

### Property Cheatsheet
| Operator/Method | Own Property | Protoype Chain | Enumerable | Non-Enumerable |
| ---- | ---- | ---- | ---- | ---- |
| `in` | Yes | Yes | Yes | Yes |
| `hasOwnProperty()` | Yes | No | Yes | Yes |
| `Object.getOwnPropertyNames()` | No | Yes | Yes | Yes |
| `Object.keys()` | Yes | No | Yes | No |

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
The default implicit execution context for every JavaScript function.
This object is created every time JavaScript runs.
Any variable assigned without declaration becomes a property of `global` (which can have unforseen consequences sometimes)
All properties in the global scope are here, with notable examples below.

### Properties/Methods of `global`
Primitive Types
: Boolean, BigInt, Number, String, and Symbol, and undefined (Not Null)

Built In Objects
: Array, Object, Function, Date, Math, RegExp, JSON
 
Values
: Infinity, NaN, 

Methods
: ParseInt, ParseFloat

Error Types
: Error, EvalError, RangeError, ReferenceError, SyntaxError, and TypeError 

Other
: console, global, Map

## Function Execution Context
Execution Context
: the **environment** in which a function executes
JS uses EC to determine the value of `this`
EC is determined by the Invocation of a method, not definition
Binding `this` is another way to refer to EC
### Implicit Execution Context
- Global Scope: using `this` in the global scope or within a function that is not otherwise within another object which provides execution context, the global object will be used as context
- Method Execution Context: the object used to access the method is used as execution context
### Explicit Execution Context
- `Function.prototype.call()` method: Used in place of invocation syntax when calling a function/method to pass in the desired execution context (value of `this`) along with any arguments for the function
- `Function.prototype.apply()` method: Works as `call` except using an array for function arguments (first arg is still `this`)
- `Function.prototype.bind()`: Returns a new function with a **permanent** `this` value for every future function call (original function is unaltered)
Examples:
```javascript
// call with individual argements:
someObject.someMethod.call(context, arg1, ..., argN)

// apply with array
let args = [arg1, arg2, arg3];
someObject.someMethod.apply(context, args)

// call with spread operator
someObject.someMethod.call(context, ...args);

// bind
let boundMethod = someObject.unboundMethod.bind(context, ...args))
```

## Context Loss
###Method Copied into a global variable or another object property
```javascript
let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

// context is john
john.greetings(); // => hello, John Doe

// Strips Context; context is now the global object
let foo = john.greetings;
foo(); // => hello, undefined undefined

let greg = {
  firstName: "Greg",
  lastName: "WhatsHisFace",
};

// Context changed to greg
greg.foo = john.greetings; 
greg.foo(); // => hello, Greg WhatsHisFace
```
### Inner Function not using Surrounding context
In this example, the function the function invocation inside the object doesn't specify context using method invocation or explicit calls, therefore uses the global object
```javascript
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    console.log(this); // #1 => obj
    function bar() {
      console.log(this); // #3 => global (no props a & b)
      console.log(this.a + ' ' + this.b); // #4 => undefined undefined
    }
    console.log(this); // #2 => obj
    bar(); // Invocation of bar with no context provided **cause for error**
  },
};

obj.foo(); // obj passed in as context
```
Solutions to this problem:
```javascript
// Use of variable to preserve context
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;  // Preserves context before no-context invocation of bar

    function bar() {
      console.log(self.a + ' ' + self.b); // context is passed into the inner function scope using variable
    }

    bar();
  },
};

obj.foo(); // => hello world

// Use of call/apply to provide explicit context
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(self.a + ' ' + self.b);
    }

    bar.call(this); // sets execution context explicitly
  },
};

obj.foo(); // => hello world

// Use bind to permanently set explicit context
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this); // Function expression returns a function bound to the current context of this

    bar(); // works multiple times

    // some more code
    bar(); // works multiple times

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world

// Use an Arrow Function
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    // Arrow Function always inherits context from surrounding scope
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    }

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

obj.foo(); // => hello world

```
Arrow Functions:
Exectuion context is the same as its lexical context used *inside a method*
Execution context is always global variable when used *as a method*

### Function as Argument
Making a function call inside a method requres passing in context if the callback function uses `this`
Fixes are similar as above: variable, `bind`, `call`/`apply`, `bind`, Arrow, or `thisArg` argument (included in Array.prototype methods)

## Constructors
Constructors
: A function (capitalized by convention) which, instead of returning an object, accepts an object passed in as context (using the `new` keyword) and adds properties and methods to the object using the `this` keyword
### The `new` keyword
JS does the following 6 things when a function is invoked with `new`:
1. Creates a new object.
2. Sets `[[Prototype]]` of new object to point to the same object as the constructor's `prototype` property.
3. Sets `constructor` property of new object to point to the constructor function.
3. Sets `this`inside the function to refer to new object.
4. Invokes the function.
5. Returns the new object implicitly (no `return` expression necessary).

Explicit Return Values only override the new object if the return value itself is an object.
`instanceof` operator will confirm if object made by a Constructor function (using `constructor` property is more useful)

## Prototypes
All objects have a hidden `[[Prototype]]` property which can be accessed, but does not show even when using `hasOwnProperty`.
When JavaScript is asked to reference a property on an object, it follows the **Prototypal Chain**
```javascript
function Dog() {}
Dog.prototype = {
  dogMethod() {
    console.log(`I'm ${this.name} and I'm an Dog!`);
  }
};

function Terrier() {
}
Terrier.prototype = {
  terrierMethod() {
    console.log(`I'm ${this.name}. Yip, yip!`);
  }
}

let scottTheTerrier = { name: "Scott" };
Object.setPrototypeOf(scottTheTerrier, Terrier.prototype); // Set object to Constructor's Prototype to inherit
scottTheTerrier.terrierMethod(); // => I'm Scott. Yip, yip!

Object.setPrototypeOf(Terrier.prototype, Dog.prototype); // Set Constructor's prototype to the next constructor's prototype to extend the chain
scottTheTerrier.dogMethod(); // => I'm Scott and I'm an Dog!
```
The Prototypal Chain for the above code is: 
1. `scottTheTerrier` =>
3. `Terrier.prototype.__proto__` === `Dog.prototype` =>
4. `Dog.prototype.__proto__` === `Object.prototype` =>
5. `Object.prototype.__proto__` === `null`
Methods on objects lower in the prototypal chain take precedence over others further out (similar to variable shadowing)
All object-like types (Arrays, Objects, Functions) all work using this chaining

### Instance Methods
Methods stored on the `prototype` property of a constructor/class.
These methods can be accessed by any instance directly due to the nature of the prototypal chain (unless the same property name is used lower on the chain)

### Static Methods
Accessed directly on the constructor function.
```javascript
function Constructor() {}
Constructor.staticMethod = function() {}
Constructor.prototype.instanceMethod = {
  function() {}
}
```

## ES6 Classes
Syntactic Sugar allowing use of constructor & prototype functionality for creating object types:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  animalMethod() {
    console.log(`I'm ${this.name} and I'm an animal!`);
  }
};

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  dogMethod() {
    console.log(`I'm ${this.name} and I'm an Dog!`);
  }
}

class Terrier extends Dog {
  constructor(name) {
    super(name);
  }
  terrierMethod() {
    console.log(`I'm ${this.name}. Yip, yip!`);
  }
}

// Use of prototypes still allows classes to work
let scottTheTerrier = { name: "Scott" };
Object.setPrototypeOf(scottTheTerrier, Terrier.prototype); // Set object to Constructor's Prototype to inherit
scottTheTerrier.terrierMethod(); // => I'm Scott. Yip, yip!
scottTheTerrier.dogMethod(); // => I'm Scott and I'm an Dog!
scottTheTerrier.animalMethod(); // => I'm Scott and I'm an animal!
console.log(Animal.prototype.__proto__ === Object.prototype); // => true
console.log(Object.prototype.__proto__); // ==> null

// More easily, you can use the new keyword
let reginald = new Terrier('Reginald');
reginald.terrierMethod(); // => I'm Scott. Yip, yip!
reginald.dogMethod(); // => I'm Scott and I'm an Dog!
reginald.animalMethod(); // => I'm Scott and I'm an animal!
```

## OLOO
```javascript
let animalPrototype = {
  init(name) {
    this.name = name;
    return this;
  },
  animalMethod: function() {
    console.log(`I'm ${this.name} and I'm an animal!`);
  }
};

let dogPrototype = Object.create(animalPrototype);
dogPrototype.dogMethod = function() {
  console.log(`I'm ${this.name} and I'm an Dog!`);
};

let terrierPrototype = Object.create(dogPrototype);
terrierPrototype.terrierMethod = function() {
  console.log(`I'm ${this.name}. Yip, yip!`);
};

// Use of prototypes still allows classes to work
let scottTheTerrier = Object.create(terrierPrototype).init("Scott");
scottTheTerrier.terrierMethod(); // => I'm Scott. Yip, yip!
scottTheTerrier.dogMethod(); // => I'm Scott and I'm an Dog!
scottTheTerrier.animalMethod(); // => I'm Scott and I'm an animal!
```

## Pseudo-Classical Inheritance vs Prototypal Inheritance
### Both
- Forms of Inheritance
- Work under the hood using `[[Prototype]]`
### Pseudo-Classical Inheritance
- AKA Constructor/Prototype Pattern
- Use of Constructor function and `prototype` object to provide inheritance
- *Like* classes, but without actually using a "class"
- Using `class` and `extends` is also a form of Pesudo-Classical inheritance
### Prototypal Inheritance
- AKA Prototypal Delegation or Object Inheritance
- Creating Prototype Objects and usieng `Object.create()` to set the `[[Protoype]]` property to inherit functions

## Mixins
Single Inheritance
: JavaScript Objects can only have *one prototype object*
Multiple Inhericance
: Inheriting from multiple objects. **Multiple Inheritance is not Supported by JavaScript**
Mixin
: A pattern that ads methods and properties from one object to another
- Mixins do not use prototypal delegation, due to JS's Single Inheritance nature
- Mixins work by copying properties/methods using `Object.assign()` or another comparable method.
- First, Create an object with properties to mix
- Then, Create a class in which to mix the object
- Last assign the mix object's properties to the Class's `prototype` property (not directly on the class)
- All instances of the class beneath will inherit that property
Using Mixins on the `prototype` property may look messy when working with classes/constructor inheritance, but it preserves the memory benefits of inheritance while working around the single inheritance problem.

## Polymorphism
Polymorphism
: When two+ objects can call the same method name ith no errors
Implementation Options:
- Inheritance: Same method names will override super-type methods
- **Duck Typing**: When objects of unrelated types both respond to the same name
Duck Typing is focused on behavior over type per below example:
```javascript
class Chef {
  prepare(wedding) {
    this.prepareFood(wedding.guests);
  }

  prepareFood(guests) {
    // implementation
  }
}

class Decorator {
  prepare(wedding) {
    this.decoratePlace(wedding.flowers);
  }

  decoratePlace(flowers) {
    // implementation
  }
}

class Wedding {
  constructor(guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers;
  }

  prepare(preparers) {
    preparers.forEach(preparer => {
      preparer.prepare(this);
    });
  }
}
```
