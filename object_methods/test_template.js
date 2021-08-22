let source = {
  src: ['1'],
}

let target = {};
Object.assign(target, source);
target.trg = "Target Property";

source.src[0] = "Something Different";

console.log(target);
console.log(source);
console.log(target.src);
console.log(source.src);
console.log(target.trg);
console.log(source.trg);
console.log(target.hasOwnProperty('src'));
console.log(source.hasOwnProperty('src'));
console.log(target.hasOwnProperty('trg'));
console.log(source.hasOwnProperty('trg'));
console.log("src" in target);
console.log("src" in source);
console.log("trg" in target);
console.log("trg" in source);
console.log(target.propertyIsEnumerable('src'));
console.log(source.propertyIsEnumerable('src'));
console.log(target.propertyIsEnumerable('trg'));
console.log(source.propertyIsEnumerable('trg'));
console.log(Object.keys(target));
console.log(Object.keys(source));
console.log(Object.getOwnPropertyNames(target));
console.log(Object.getOwnPropertyNames(source));

/*

console.log(target);
console.log(source);
console.log(target.a);
console.log(source.a);
console.log(target.b);
console.log(source.b);
console.log(target.hasOwnProperty('a'));
console.log(source.hasOwnProperty('a'));
console.log(target.hasOwnProperty('b'));
console.log(source.hasOwnProperty('b'));
console.log("a" in target);
console.log("a" in source);
console.log("b" in target);
console.log("b" in source);
console.log(target.propertyIsEnumerable('a'));
console.log(source.propertyIsEnumerable('a'));
console.log(target.propertyIsEnumerable('b'));
console.log(source.propertyIsEnumerable('b'));
console.log(Object.keys(target));
console.log(Object.keys(source));
console.log(Object.getOwnPropertyNames(target));
console.log(Object.getOwnPropertyNames(source));

*/