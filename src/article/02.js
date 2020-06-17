String.prototype.getVowels = function getVowels() {
  return this.match(/[aeiou]/gi) ?? [];
}

console.log('Hello there'.getVowels()); // ['e','o','e','e']
console.log(new String('Ah').getVowels()); // ['A']
console.log(String('General Kenobi').getVowels()); // ['e', 'e', 'a', 'e', 'o', 'i']


Number.prototype.isOdd = function isOdd() {
  return (this.valueOf() & 1) === 1;
}

console.log((1).isOdd()); // true
console.log(2..isOdd()); // false
console.log(new Number(31).isOdd()); // true
console.log(Number(44).isOdd()); // false


Boolean.prototype.isTrue = function isTrue(){
  return this.valueOf() === true;
}

console.log(true.isTrue()); // true
console.log(false.isTrue()); // false
console.log(new Boolean().isTrue()); // false
console.log(new Boolean(true).isTrue()); // true
console.log(new Boolean(0).isTrue()); // false
console.log(Boolean('a').isTrue()); // true


Array.prototype.multiply = function multiply(num){
  this.forEach((item, index) => (this[index] = item * num));

  return this;
}

console.log(new Array(1,2).multiply(2)); // [2, 4]
console.log([2,3].multiply(2)); // [4,6]
