class Vec3 extends Array {
  constructor(...args) {
    if (args.length !== 3 && args.length !== 0) {
      throw Error('Vec3 requires 0 or 3 arguments');
    }

    const components = args.length ? args : [0, 0, 0];

    super(...components);
  }

  get x() {
    return this[0];
  }

  set x(x) {
    this[0] = x;
  }

  get y() {
    return this[1];
  }

  set y(y) {
    this[1] = y;
  }

  get z() {
    return this[2];
  }

  set z(z) {
    this[2] = z;
  }

  clone() {
    return new this.constructor(...this);
  }

  distance(vec3) { // don't care if we got Vec3 or normal array
    return Math.hypot(this.x - vec3[0], this.y - vec3[1], this.z - vec3[2]);
  }

  add(vec3) {
    this.x += vec3[0];
    this.y += vec3[1];
    this.z += vec3[2];

    return this;
  }

  substract(vec3) {
    this.x -= vec3[0];
    this.y -= vec3[1];
    this.z -= vec3[2];

    return this;
  }

  divide(vec3) {
    this.x /= vec3[0];
    this.y /= vec3[1];
    this.z /= vec3[2];

    return this;
  }

  normalize() {
    const len = Math.hypot(...this);

    return this.divide([len, len, len]);
  }

}

console.log(new Vec3(1,2,3)) // [1, 2, 3]
