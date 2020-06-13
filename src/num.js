
/* Bad practice. */
// Number.prototype.isOdd = function isOdd(){
//   return (this.valueOf() & 1) === 1;
// }
//
// console.log('prototype', (0).isOdd());
// console.log('prototype',(1).isOdd());
// console.log('prototype',(2).isOdd());
// console.log('prototype', new Number(31).isOdd());
// console.log('prototype', Number(44).isOdd());

/* Functional */
function isOdd(num){
  return (num & 1) === 1;
}


console.log('fp', isOdd());
console.log('fp', isOdd(0));
console.log('fp', isOdd(1));
console.log('fp', isOdd(2));
console.log('fp', isOdd(new Number(31)));
console.log('fp', isOdd(Number(44)));

/* Custom ES6 class */
class OddNumber {
  constructor(value){
    this.value = Number(value);
  }

  isOdd(){
    return (this.value & 1) === 1
  }
}

console.log('custom class', new OddNumber().isOdd());
console.log('custom class', new OddNumber(0).isOdd());
console.log('custom class', new OddNumber(1).isOdd());
console.log('custom class', new OddNumber(2).isOdd());
console.log('custom class', new OddNumber(new Number(31)).isOdd());
console.log('custom class', new OddNumber(Number(44)).isOdd());


/* Extending numing */
class CustomNumber extends Number {
  isOdd(){
    return (this.valueOf() & 1) === 1;
  }
}

console.log('extending class', new CustomNumber().isOdd());
console.log('extending class', new CustomNumber(0).isOdd());
console.log('extending class', new CustomNumber(1).isOdd());
console.log('extending class', new CustomNumber(2).isOdd());
console.log('extending class', new CustomNumber('3').isOdd());
console.log('extending class', new CustomNumber('ab').isOdd());


let customNumber = new CustomNumber(44);

customNumber = 13;

try {
console.log('extending class override', customNumber.isOdd());
} catch (err){
  console.log(err.message);
}
