
/* Bad practice. */
// Boolean.prototype.isTrue = function isTrue(){
//   return this.valueOf() === true;
// }
//
// console.log('prototype', true.isTrue());
// console.log('prototype', false.isTrue());
// console.log('prototype', new Boolean().isTrue());
// console.log('prototype', new Boolean(true).isTrue());
// console.log('prototype', new Boolean(0).isTrue());
// console.log('prototype', Boolean().isTrue());
// console.log('prototype', Boolean('a').isTrue());
// console.log('prototype', Boolean(false).isTrue());


/* Functional */
function isTrue(bool){
  return bool === true;
}


console.log('fp', isTrue());
console.log('fp', isTrue(true));
console.log('fp', isTrue(false));
console.log('fp', isTrue('a'));
console.log('fp', isTrue(0));
console.log('fp', isTrue({}));
console.log('fp', isTrue(''));

/* Custom ES6 class */
class TrueBoolean {
  constructor(value){
    this.value = Boolean(value);
  }

  isTrue(){
    return this.value === true;
  }
}

console.log('custom class', new TrueBoolean().isTrue());
console.log('custom class', new TrueBoolean(true).isTrue());
console.log('custom class', new TrueBoolean(false).isTrue());
console.log('custom class', new TrueBoolean('a').isTrue());
console.log('custom class', new TrueBoolean(0).isTrue());
console.log('custom class', new TrueBoolean({}).isTrue());


/* Extending string */
class CustomBoolean extends Boolean {
  isTrue(){
    return this.valueOf() === true;
  }
}

console.log('extending class', new CustomBoolean().isTrue());
console.log('extending class', new CustomBoolean(true).isTrue());
console.log('extending class', new CustomBoolean(false).isTrue());
console.log('extending class', new CustomBoolean('a').isTrue());
console.log('extending class', new CustomBoolean(0).isTrue());
console.log('extending class', new CustomBoolean({}).isTrue());


let customBoolean = new CustomBoolean('test');

customBoolean = true;

try {
console.log('extending class override', customBoolean.isTrue());
} catch (err){
  console.log(err.message);
}
