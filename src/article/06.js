class CustomNumber extends Number {
  isOdd(){
    return (this.valueOf() & 1) === 1;
  }
}

console.log(new CustomNumber(1).isOdd()); // true
console.log(new CustomNumber(2).isOdd()); //false
console.log(new CustomNumber('3').isOdd()); //true
console.log(new CustomNumber('ab').isOdd()); // false
