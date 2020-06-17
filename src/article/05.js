class MultiplyArray {
  #value

  constructor(...value){
    this.#value = new Array(...value);
  }

  multiply(num){
    this.#value.forEach((item, index) => (this.#value[index] = item * num));

    // Well, return what? class instance or the value?
    return this.#value;
  }
}

console.log(new MultiplyArray(1,2,3).multiply(2));
