// e.g. 1
const promise1 = Promise.resolve(123);

promise1.then((value) => {
    console.log('promise1', value);
    // Expected output: 123
});

// e.g. 2
export function something<T = unknown>(_do: string, ..._some: any[]): Thenable<T> {
    return {
        then() {
            console.log('_do, ..._some', _do, ..._some);
            console.log('this', this);
            return this;
        }
    };
}

const sth = something('I', "eat.")

const promise2 = Promise.resolve(sth);


console.log('end', promise2.then((value) => {
    console.log('promise2', value);
    console.log('end');
    // Expected output: 123
}));

console.log('end2');