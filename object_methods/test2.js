const Swimmable = {
  swim() {}
}

class Bird {}

class FlyingBird extends Bird {
  fly() {}
}

class Stork extends FlyingBird {}

class Parrot extends FlyingBird {}

class Penguin extends Bird {}
Object.assign(Penguin.prototype, Swimmable);

class Ostrich extends Bird {}
Object.assign(Ostrich.prototype, Swimmable);

class Duck extends FlyingBird {}
Object.assign(Duck.prototype, Swimmable);

class Goose extends FlyingBird {}
Object.assign(Goose.prototype, Swimmable);