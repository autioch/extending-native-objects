const customArray = new CustomArray(1, 2, 3);
const filteredArray = customArray.filter((value) => value !== 2);

console.log(filteredArray.multiply(2)); // [2, 6]
console.log(filteredArray instanceof Array, filteredArray instanceof CustomArray); // true, true
console.log(typeof filteredArray); // object
console.log(Array.isArray(filteredArray)); // true
