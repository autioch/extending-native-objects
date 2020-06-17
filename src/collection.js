class Collection extends Array {

  // TODO Item class?

  constructor(...args){
    super(...args);
    setupEventEmitter(this);
  }

  get(id){
    return this.find((item) => item.id === id);
  }

  at(index){
    return this[index];
  }

  first(){
    return this[0];
  }

  last(){
    return this[this.length - 1];
  }

  push(...args){
    super.push(...args);
    this.trigger('add', ...args)
  }

  pop(...args){
    super.pop(...args);
    this.trigger('remove', ...args)
  }

  shift(...args){
    super.shift(...args);
    this.trigger('remove', ...args)
  }

  unshift(...args){
    super.shift(...args);
    this.trigger('add', ...args)
  }

  splice(...args){ // could be more sofisticated
    super.shift(...args);
    this.trigger('add', ...args)
    this.trigger('remove', ...args)
  }

  // and even more methods.
}
