class CustomMath extends Math {

  format(){}

}

class CustomJSON extends JSON {

  withoutCircular(){}

}

class CustomReflect extends Reflect {

  trace(){}

}

class CustomProxy extends Proxy {

  missingPropHandler(){}

}


/* Allows extending, but not calling with "new". And class can't be called without "new". */
class CustomSymbol extends Symbol {

  ugh(){}

}

new CustomSymbol().ugh()


class CustomBigInt extends BigInt {

  toJSON(){}  // Big int doesn't serialize by default

}

new CustomBigInt().toJSON()
