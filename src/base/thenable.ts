// e.g. 1
const promise1 = Promise.resolve(123);

promise1.then((value) => {
    console.log(value);
    // Expected output: 123
});

// e.g. 2
export function something<T = unknown>(_do: string, ..._some: any[]): Thenable<T> {
    return {
        then() {
            console.log(_do, ..._some);
            console.log('this', this);
            return this;
        }
    };
}

const promise2 = Promise.resolve(something('I', "eat."));
promise2.then((value) => {
    console.log(value);
    // Expected output: 123
});