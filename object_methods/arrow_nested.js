let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    // Arrow Function always inherits context from surrounding scope
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    };

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

obj.foo(); // => hello world (2x)

let newContext = obj.foo; // global as context
newContext(); // => undefined undefined(2x)


let newObj = {
  a: "Goodbye",
  b: "World",
};

newObj.foo = obj.foo; // => newObj as context
newObj.foo(); // => Goodbye World (2x)

// newObj as context
obj.foo.call(newObj); // => Goodbye World (2x)
