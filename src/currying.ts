function curry(f: Function) {
    return function (a: any) {
        return function (b: any) {
            return f(a, b);
        };
    };
}

function sum(a: number, b: number) {
    return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2));