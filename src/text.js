const VOWEL_REGEX = /[aeiou]/gi;

/* Bad practice. */
// String.prototype.getVowels = function getVowels(){
//   return this.match(VOWEL_REGEX) ?? [];
// }
//
// console.log('prototype', ''.getVowels());
// console.log('prototype','a'.getVowels());
// console.log('prototype','b'.getVowels());
// console.log('prototype','hey'.getVowels());
// console.log('prototype', new String('woah').getVowels());
// console.log('prototype', String('huh').getVowels());

/* Functional */
function getVowels(str){
  return str?.match(/[aeiou]/gi) ?? [];
}

console.log('fp', getVowels(''));
console.log('fp', getVowels('a'));
console.log('fp', getVowels('b'));
console.log('fp', getVowels('hey'));
console.log('fp', getVowels(new String('woah')));
console.log('fp', getVowels(String('huh')));

/* Custom ES6 class */
class VowelString {

  #value

  constructor(value){
    this.#value = value;
  }

  getVowels(){
    return this.#value.match(VOWEL_REGEX) ?? [];
  }
}

console.log('custom class', new VowelString('').getVowels());
console.log('custom class', new VowelString('a').getVowels());
console.log('custom class', new VowelString('b').getVowels());
console.log('custom class', new VowelString('hey').getVowels());
console.log('custom class', new VowelString(new String('woah')).getVowels());
console.log('custom class', new VowelString(String('huh')).getVowels());


/* Extending string */
class CustomString extends String {
  getVowels(){
    return this.match(VOWEL_REGEX) ?? [];
  }
}

console.log('extending class', new CustomString('').getVowels());
console.log('extending class', new CustomString('a').getVowels());
console.log('extending class', new CustomString('b').getVowels());
console.log('extending class', new CustomString('hey').getVowels());
console.log('extending class', new CustomString('woah').getVowels());
// console.log('extending class', String('huh').getVowels());


let customString = new CustomString('test');

customString = 'b';

try {
console.log('extending class override', customString.getVowels);
} catch (err){
  console.log(err.message);
}

let nextId = 0;

class Item {
  constructor(){
    this.id = nextId++;
  }
}

class CustomString2 extends Item {

  #value

  constructor(value){
    super();
    this.#value = value;
  }

  getVowels(){
    return this.#value.match(/[aeiou]/gi) ?? [];
  }
}


new CustomString2('hmm. oh.').getVowels();
