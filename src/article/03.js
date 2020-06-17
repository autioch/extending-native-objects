const  iframe = document.createElement('iframe');
document.body.appendChild(iframe);

const sandbox = window.frames[0];

sandbox.Array.prototype.multiply = function multiply(num) {
  this.forEach((item, index) => (this[index] = item * num));

  return this;
}

console.log(new Array(0,1,2).multiply); // undefined
console.log(new sandbox.Array(0,1,2).multiply(2)); // [0, 2, 4]
