"use strict";
var A;
(function (A) {
    A[A["ac"] = 0] = "ac";
    A[A["b"] = 21] = "b";
    A[A["c"] = 2] = "c";
})(A || (A = {}));
const B = Object.entries(A).reduce((obj, [key, value]) => {
    obj[key] = Number(value) + 1;
    return obj;
}, {});
console.log(B); // { a: 1, b: 2, c: 3 }
console.log(Object.entries(A)); // { a: 1, b: 2, c: 3 }
console.log(B); // { a: 1, b: 2, c: 3 }
//# sourceMappingURL=record.js.map