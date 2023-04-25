enum A {
    ac = 0,
    b = 21,
    c = 2
}

const B = Object.entries(A).reduce((obj: any, [key, value]) => {
    obj[key] = Number(value) + 1;
    return obj;
}, {}) as { [key: string]: number };

console.log(B); // { a: 1, b: 2, c: 3 }
console.log(Object.entries(A)); // { a: 1, b: 2, c: 3 }

console.log(B); // { a: 1, b: 2, c: 3 }
