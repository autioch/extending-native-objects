let customNumber = new CustomNumber(44);

console.log(typeof customNumber.isOdd);  // function
customNumber = 13;

console.log(typeof customNumber.isOdd);  // undefined
