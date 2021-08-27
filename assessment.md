# Assessment Study Guide

## Object-Oriented Programming
OOP: Organizing programs in terms of objects which have **state** and **behavior** (aka properties and methods) and interact with one another.

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
Object Factory: Function which returns a new object which a pre-defined structure (**type**).

### Pros:
- Reduces repetitive code
- Creates new objects with same structure which do not share memory
- Allows for self-referential methods using `this` keyword

### Cons:
- Not memory efficient (all properties have full copies on each instance)
- Not compatible with the `instanceof` operator to determine type

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
- **Member Access Notation** (Dot Notation): Must be a string with no spaces or dashes (i.e. `obj.prop`).
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
| `Object.getOwnPropertyNames()` | Yes | No | Yes | Yes |
| `Object.keys()` | Yes | No | Yes | No |
### Examples
```javascript
let obj = {
  key1: "value1",
  key2: "value2",
}
// Keys is good for iterating over enumerable properties
let keys = Object.keys(obj)
console.log(keys) // =>  [ 'key1', 'key2' ]

// getOwnPropertyNames will return non-enumerable properties too
console.log(Object.getOwnPropertyNames(obj)); // =>  [ 'key1', 'key2' ]
console.log(Object.getOwnPropertyNames(keys)); // =>  [ '0', '1', 'length' ]


console.log("key1" in obj); // => true
console.log("length" in keys); // => true
console.log("hasOwnProperty" in obj); // => true

console.log(obj.hasOwnProperty("key1")); // => true
console.log(keys.hasOwnProperty("length")); // => true
console.log(obj.hasOwnProperty("hasOwnProperty")); // => false
```

### `Object.assign()`
Static Object method which copies the properties and methods of one Object to another.

NOTE: Does not work with Classes/Functions. Must be an object instance.
```javascript
// Object.assign() takes a target and applies a variable number of sources to it.
// EX: Object.assign(target, ...sources) => returns modified target

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

// Assign only copies the values/refrences to the object. Source is not a prototype.
console.log(target.__proto__ === source); // => false
```

Considerations with `Object.assign()`:
- `target` is both mutated and returned.
- For any key on `target`, the lastest source will overwrite the value.
- Only copies *own properties* for both `target` and `source`.
- If value is a reference, only a copy of reference is provided (Use Stringify to get deep copy).
- Does not leverage prototyping for memory efficiency and typing.

## Prototypes

Prototype: An object from which another object inherits properties and methods. In JS, this is done with the `[[Prototype]]` property.

### `[[Prototype]]`

JavaScript uses a hidden `[[Prototype]]` value when looking for properties or methods on objects to determine where to continue looking if the property or method is not stored directly ont the object.

### Checking `[[Prototype]]` value

- `Object.getPrototypeOf()`
- `__proto__` (aka "Dunder Proto") 

NOTE: Dunder Proto, `__proto__`, and `[[Prototype]]` all refer to the same property, but `Object.getPrototypeOf()`` is the de facto correct choice.

Example: Array Constructor

```javascript
let arr = [1, 2, 3];

console.log(arr.hasOwnProperty("forEach"));  // => false
console.log(Array.prototype.hasOwnProperty("forEach"));  // => true
console.log(Object.getPrototypeOf(arr) === Array.prototype);  // => true
console.log("forEach" in arr);  // => true
```

### `Prototype` vs `[[Prototype]]`

There is also a `prototype` property on all Function objects. `prototype` is used in conjunction with `[[Prototype]]`, but is a completely different concept. 

In prototypal inheritance, the `[[Prototype]]` property is pointed to the `prototype` property of a Function or Class in order create a chain of inheritance.

### `[[Prototype]]` behavior:
- All objects created in the global scope default to `Object.prototype` as their `[[Prototype]]` value.
- `Object.prototype` has a `[[Prototype]]` value set to `null`.
- `[[Prototype]]` values can be set or altered using methods or changing property values.
- `Object.getPrototypeOf(obj)` or `obj.__proto__` can be used to determine `[[Prototype]]` value of a given `obj`.

### Setting and Changing `[[Prototype]]`:
- `Object.create()`: Creates new object with `[[Prototype]]` explicitly set to a particular object.
- Constructors with `new` keyword.
- ES6 Class inheritance.
- `Object.setPrototypeOf()`: Reassigns `[[Prototype]]` property of an existing object to a new object.

NOTE: Reassignment of `[[Prototype]]` is discouraged in practice.

Example #1: `Object.create()`
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
Example 2: `setPrototypeOf()`
```javascript
let proto = {
  pro: "Prototype Property",
};

let instance = {
  inst: "Instance Property",
};

console.log(Object.getPrototypeOf(instance)); // => {}
console.log(Object.getPrototypeOf(instance) === proto); // => false

Object.setPrototypeOf(instance, proto);

// Prototype of "instance" is now "proto"

console.log(Object.getPrototypeOf(instance)); // => { pro: 'Prototype Property' }
console.log(Object.getPrototypeOf(instance) === proto); // => true`
```

### Chaining
When a property/method is accessed on an object, JavaScript follows the **Prototypal Chain** in order to find a matching property/method and will access/invoke the first match. 

The object being accessed is checked first, then the object pointed to by its `[[Prototype]]` value, and so un until a value is found or the chain ends with `null` which is the value of `Object.prototype.__proto__`.

Benefits:
- Objects can have access to methods without having to fully copy them as an owned property.
- Objects in protype chain can all have properties of the same name, each accessible from itself and any other inheriting objects which do have their own property of that name.

### Example: `[[Prototype]]` and Inheritance
```javascript
// Two objects are chained together with different "prop" values

let proto = { 
  prop: "Prototype Value",
  method: function() {
    return `My property: ${this.prop}.`;
  }
};

let instance = { prop: "Instance Value" };

Object.setPrototypeOf(instance, proto);

// "prop" holds its value for each object independently.

console.log(proto);  // => { prop: 'Prototype Value' , method: [Function: method] }
console.log(instance);  // => { prop: 'Instance Value' }

// With no owned "prop" value, the chain goes to the immediate next object up in the chain

let newInstance = Object.create(instance);

console.log(newInstance);  // => {}
console.log(newInstance.prop);  // => Instance Value

// When a new "prop" value is created on an instance, it can only modify or create an owned property

newInstance.prop = "Something Absolutely Different";

console.log(proto);  // => { prop: 'Prototype Value', method: [Function: method]  }
console.log(instance);  // => { prop: 'First Instance Value' }
console.log(newInstance);  // => { prop: 'Something Absolutely Different' }

// The method on the top of the chain is full accessible by all child objects

console.log(proto.method()); // => My property: Prototype Value.
console.log(instance.method()); // => My property: First Instance Value.
console.log(newInstance.method()); // => My property: Something Absolutely Different.

// The Prototype Chain

console.log(newInstance.__proto__ === instance); // => true
console.log(instance.__proto__ === proto); // => true
console.log(proto.__proto__ === Object.prototype); // => true
console.log(Object.prototype.__proto__ === null); // => true
```

All object-like types (Arrays, Objects, Functions) all work using this chaining

## Functions

### Creating Functions

#### Function Declarations

`function` used as first word.

Benefits:
- Hoisting: can invoke a function before it is defined
- Named: able to refer to the function by name

#### Function Expressions:

Any function which is not a function declaration or a method.

Examples:
```javascript
// Variable Assignment
let exp = function() {}

// Pass to another function
[1, 2, 2].forEach(function(elem) {})

// Return to caller
function passBack() { return function() {} }

// Arrow function
(a) => a * 2
```

Function Expressions can be anynomous or named.

```javascript
let exp = function() {} // anonymous
let exp = function funName() {} // named
```
Named functions are most beneficial when reading error messages during troubleshooting.

### First-Class & Higher Order Functions:

Ability to assign functions to variables and properties, pass them to functions, or return from other functions.

All JavaScript functions are **First-Class Functions**, and can be referenced without **Function Invocation Syntax** to be used as a value without being invoked.

```javascript
function say() { console.log("Say") }
let speak = say; // Function passed as value (no invocation syntax)
speak(); // Function expression invoked using Function Invocation Syntax
```

**Higher-Order Functions** are functions which accept a function as argument or return a function.

## `global`

- The default implicit execution context for every JavaScript function.
- Created every time JavaScript runs.
- Houses most core properties and methods accessible in JS.

Any variable assigned without declaration (`let`, `var`, `const`) becomes a property of `global`. 

### Properties/Methods of `global`
| Category | Examples |
| ---- | ---- |
|Primitive Types | Boolean, BigInt, Number, String, and Symbol, and undefined (Not Null) |
|Built In Objects | Array, Object, Function, Date, Math, RegExp, JSON |
|Values | Infinity, NaN,  |
|Methods | ParseInt, ParseFloat |
|Error Types | Error, EvalError, RangeError, ReferenceError, SyntaxError, and TypeError  |
|Other | console, global, Map |

`global` under the hood:
```javascript
console.log(Object.getPrototypeOf(global)) // => {}
console.log(Object.getPrototypeOf(Object.getPrototypeOf(global)) === Object.prototype) // => true
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(global))) === null) // => true

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(global))) // => [ 'constructor' ]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(Object.getPrototypeOf(global)))) // => Object.prototype properties

console.log(global.constructor)  // => [ Function: Object]
console.log(Object.getPrototypeOf(global.constructor))  // => [ Function ]

console.log(global.constructor.constructor)  // => [ Function: Function]
console.log(Object.getPrototypeOf(global.constructor.constructor))  // => [ Function ]

console.log(Object.getPrototypeOf(global).constructor)  // => [ Function: Object ]
console.log(Object.getPrototypeOf(Object.getPrototypeOf(global)).constructor) // =>  [ Function: Object ]
```

## Function Execution Context

The **environment** in which a function executes used to determine the value of `this`.

EC is determined by the Invocation of a method, not definition.

### Implicit Execution Context

- Global Scope: `global` will be used as context.
- Method Execution Context: the object used to access the method is used as execution context.

### Explicit Execution Context
- `Function.prototype.call()` method: Accepts desired execution context (value of `this`) as first argument, followed by arguments to be passed into the function.
- `Function.prototype.apply()` method: Works as `call` except using an array for function arguments (first arg is still `this`).
- `Function.prototype.bind()`: Returns a new function with a **permanent** `this` binding for every future function call (original function is unaltered).

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

### Example 1: Method called in global context

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

// Reassignment strips context
let foo = john.greetings;

// Context is not the global object
foo(); // => hello, undefined undefined
```

Solutions: Use `call`, `apply`, or `bind` to explicitly define context.

### Example 2: Function call within Method

```javascript
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }
    
    bar();
  },
};

obj.foo(); // undefined undefined
```

In this example, the function invocation inside the object doesn't specify context using method invocation or explicit calls, therefore uses the global object. Let's look more closely.

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

There are a number of ways to approach this solution.

Solution #1: Store context in Variable.

```javascript
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
```

Solution #2: Use `call`/`apply` to explicitly set context.

```javascript
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
```

Solution #3: Use `bind` to permanently set context.

```javascript
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this); // Function expression returns a function bound to the current context of this

    bar(); // works multiple times

    bar(); // works multiple times
  }
};

obj.foo();
// => hello world
// => hello world
```

Solution #4: Use an Arrow Function

- Inside a method, arrow function execution context is the same as its lexical context.
- As a method, arrow function execution context is always the global variable.

```javascript
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

### Example 3: Function as Argument

Making a function call inside a method requres passing in context if the callback function uses `this`.

Solutions: 
- `thisArg` argument (included in `Array.prototype` methods).
- Same as previous (store as variable, `call`, `apply`, `bind`, Arrow Functions).

## Constructors

Functions which accept an object passed in as context and adds properties and methods to the object using the `this` keyword
- Capitalized by convention.
- Called with the `new` keyword.

### The `new` keyword

JS does the following 6 things when a Constructor Function is invoked with `new`:
1. Creates a new object.
2. Sets `[[Prototype]]` of new object to point to the same object as the constructor's `prototype` property.
3. Sets `constructor` property of new object to point to the constructor function.
3. Sets `this` inside the function to refer to new object.
4. Invokes the function.
5. Returns the new object implicitly (no `return` expression necessary).

Explicit Return Values only override the new object if the return value itself is an object.

`instanceof` operator will confirm if object made by a Constructor function (using `constructor` property is more useful).

Example:
```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;

  this.drive = function() {
    this.started = true;
  };

  // rest of the methods
}

let truck = new Car("chevy", "s10")
console.log(truck)
console.log(truck.__proto__ === Car.prototype); // => true
console.log(truck.constructor); // => [Function: Car]
console.log(truck.constructor === Car); // => true
console.log(truck instanceof Car); // => true
```

## ES6 Classes

Syntactic Sugar allowing use of constructor & prototype functionality for creating object types.

Prototype Chaining Example:
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
Example with ES6 Classes:
```javascript

class Dog extends Animal {
  constructor(name) {
    this.name = name;
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
let scottTheTerrier = new Terrier("Scott");
scottTheTerrier.terrierMethod(); // => I'm Scott. Yip, yip!
scottTheTerrier.dogMethod(); // => I'm Scott and I'm an Dog!
```

## Static & Instance Methods

### Instance Methods

Methods stored on the `prototype` property of a constructor/class.

These methods can be accessed by any instance directly due to the nature of the prototypal chain (unless the same property name is used lower on the chain)

### Static Methods

Accessed directly on the constructor function or class.

### Examples

Example 1: Constructor
```javascript
function Constructor() {}

Constructor.staticMethod = function() {}

Constructor.prototype.instanceMethod = {
  function() {}
}
```

Example 2: 
```javascript
class Class {
  constructor() {}
  
  static staticMethod() {}
  
  instanceMethod() {}
}
```

## OLOO

Objects can be used as prototypes using `Object.create()` and still share memory without being classes or constructors.

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

### Pseudo-Classical Inheritance
- AKA Constructor/Prototype Pattern
- Use of Constructor function and `prototype` object to provide inheritance
- *Like* classes, but without actually using a "class"
- Using `class` and `extends` is also a form of Pesudo-Classical inheritance

### Prototypal Inheritance
- AKA Prototypal Delegation or Object Inheritance
- Creating Prototype Objects and usieng `Object.create()` (OLOO) to set the `[[Protoype]]` property to inherit functions

### Both
- Forms of Inheritance
- Work under the hood using `[[Prototype]]`

## Mixins

Single Inheritance: JavaScript Objects can only have *one prototype object*.

Multiple Inhericance: Inheriting from multiple objects. **Multiple Inheritance is not Supported by JavaScript**.

### Mixin: Mimicing Multiple Inheritance
- Mixins do not use prototypal delegation, due to JS's Single Inheritance nature.
- Mixins work by copying properties/methods (i.e. `Object.assign()`) onto the `protototype` property of a super-class.
- First: Create an object with properties to mix.
- Next: Create a class in which to mix the object.
- Last: Assign the mix object's properties to the Class's `prototype` property (not directly on the class).
- All instances of the class beneath will inherit that property.

Using Mixins on the `prototype` property may look messy when working with classes/constructor inheritance, but it preserves the memory benefits of inheritance while working around the single inheritance problem.

## Polymorphism

Polymorphism: When calling a method works regardless of object instance or type.

Implementation Options:
- Inheritance: Same method names will override super-type methods.
- **Duck Typing**: When objects of unrelated types both respond to the same name
- 
Duck Typing is focused on behavior over type.
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