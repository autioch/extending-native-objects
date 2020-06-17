const pointFirst = new Vec3(2, 3, 4);
const pointSecond = new Vec3(4, -1, 2);

console.log(pointFirst.distance(pointSecond));  // 4.898979485566356
console.log(pointFirst.add(pointSecond)); // [6, 2, 6]
console.log(pointFirst.substract(pointSecond));  // [2, 3, 4]
console.log(pointFirst.divide(pointSecond)); // [0.5, -3, 2]

pointSecond.x = 1;
pointSecond.y = 1;
pointSecond.z = 1;
console.log(pointSecond.normalize().join(',')); // '0.5773502691896258,0.5773502691896258,0.5773502691896258'
