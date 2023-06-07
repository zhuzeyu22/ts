// Reflect
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect

// Reflect.apply
// ------------------------------
Math.floor.apply(null, [1.75]);
Reflect.apply(Math.floor, null, [1.75]);


// Reflect.construct
// ------------------------------
function func1(this: any, a: any, b: any, c: any) {
    this.sum = a + b + c;
}

// const s = new (func1 as any)func1(1, 2, 3);

const args = [1, 2, 3];

const object1 = new (func1 as any)(...args);

const object2 = Reflect.construct(func1, args);

console.log(object2.sum);
// Expected output: 6

console.log(object1.sum);
// Expected output: 6
