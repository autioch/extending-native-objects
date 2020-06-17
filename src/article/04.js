class Item {
  constructor(){
    this.id = nextId++;
  }
}

class CustomString extends Item {

  #value // private class field - recent addition

  constructor(value = ''){
    super();
    this.#value = value;
  }

  getVowels(){
    return this.#value.match(/[aeiou]/gi) ?? [];
  }
}

console.log(new CustomString('Awsome').getVowels()); // ['A', 'o', 'e']
