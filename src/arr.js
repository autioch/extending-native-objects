/* Bad practice. */
// Array.prototype.multiply = function multiply(num){
//   this.forEach((item, index) => (this[index] = item * num));
//
//   return this;
// }
//
// console.log('prototype', new Array().multiply(2));
// console.log('prototype', new Array(2).multiply(2));
// console.log('prototype', new Array('a', 3, []).multiply(2));
// console.log('prototype', Array(1,2).multiply(2));

/* Functional */
function multiply(arr, num){
  arr.forEach((item, index) => (arr[index] = item * num));

  return arr;
}


console.log('fp', multiply(new Array(), 2));
console.log('fp', multiply(new Array(2), 2));
console.log('fp', multiply(new Array('a', 3, []), 2));
console.log('fp', multiply(new Array(1, 2), 2));

/* Custom ES6 class */
class MultiplyArray {
  constructor(...value){
    this.value = new Array(...value);
  }

  multiply(num){
    this.value.forEach((item, index) => (this.value[index] = item * num));

    // Well, return what? class instance or the value?
    return this.value;
  }
}

console.log('custom class', new MultiplyArray().multiply());
console.log('custom class', new MultiplyArray(2).multiply());
console.log('custom class', new MultiplyArray('a',3, []).multiply());
console.log('custom class', new MultiplyArray(1, 2).multiply());


/* Extending string */
class CustomArray extends Array {
  multiply(num){
    this.forEach((item, index) => (this[index] = item * num));

    return this;
  }

  clone() {
    return new this.constructor(...this);
  }

  clone2(){
  	return this.constructor.from(this);
  }

}

console.log('extending class', new CustomArray().multiply(2));
console.log('extending class', new CustomArray(2).multiply(2));
console.log('extending class', new CustomArray('a',3, []).multiply(2));
console.log('extending class', new CustomArray(1,2).multiply(2));


/* Changing value */
const customArray = new CustomArray(1, 2, 3);

customArray[2] = 10;

console.log('changing value', customArray.multiply(2));


const filteredArray = customArray.filter((value) => value !== 2);

console.log('filtered', filteredArray.multiply(2));

console.log('instanceof', filteredArray instanceof Array, filteredArray instanceof CustomArray);
console.log('typeof', typeof filteredArray);
console.log('isArray', Array.isArray(filteredArray));
