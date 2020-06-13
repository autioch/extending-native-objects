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

  distance(vec3) {
    return Math.hypot(this[0] - vec3[0], this[1] - vec3[1], this[2] - vec3[2]);
  }

  add(vec3) {
    this[0] += vec3[0];
    this[1] += vec3[1];
    this[2] += vec3[2];

    return this;
  }

  substract(vec3) {
    this[0] -= vec3[0];
    this[1] -= vec3[1];
    this[2] -= vec3[2];

    return this;
  }

  divide(vec3) {
    this[0] /= vec3[0];
    this[1] /= vec3[1];
    this[2] /= vec3[2];

    return this;
  }

  normalize() {
    const len = Math.hypot(...this);

    return this.divide([len, len, len]);
  }

}


const pointFirst = new Vec3(2, 3, 4);
const pointSecond = new Vec3(4, -1, 2);

console.log(pointSecond);
console.log('distance', pointFirst.distance(pointSecond))
console.log(pointSecond);
console.log('add', pointFirst.clone().add(pointSecond))
console.log(pointSecond);
console.log('substract', pointFirst.clone().substract(pointSecond))
console.log(pointSecond);
console.log('divide', pointFirst.clone().divide(pointSecond))
console.log(pointSecond);

pointSecond.x = 1;
pointSecond.y = 1;
pointSecond.z = 1;
console.log(pointSecond);
pointSecond.normalize()
console.log('normalize', pointSecond)
