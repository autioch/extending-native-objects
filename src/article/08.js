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

console.log(new CustomArray(1,2).multiply(2)); // [2, 4]

/* Changing value */
const customArray = new CustomArray(1, 2, 3);

console.log(customArray); // [1, 2, 3]
customArray[2] = 10;

console.log(customArray.multiply(2)); // [2, 4, 20]
