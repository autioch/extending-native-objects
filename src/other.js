class CustomFunction extends Function {

  debounce(delay){}

}

new CustomFunction('arg1', 'return arg1 * 2').debounce(10);


class CustomMap extends Map {

  setWithId(item){}

  setOrUpdate(id, item){}
}

new CustomMap([['a', 3]]).setWithId({});

class CustomSet extends Set {

  setOrThrow(item){}

}

new CustomSet().setOrThrow()


class CustomPromise extends Promise {

  scheduleToCancel(delay){}

}

new CustomPromise(() => {}).scheduleToCancel(100)

class CustomRegExp extends RegExp {

  resetIndex(){
    this.lastIndex = 0;

    return this;
  }

}

new CustomRegExp().resetIndex()


class CustomDate extends Date {

  format(){}

}

new CustomDate().format();

class CustomError extends Error {

  describeBetter() {}

}

new CustomError().describeBetter();
