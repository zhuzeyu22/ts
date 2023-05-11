

console.log('IB.type');
export interface A<T> {
    (...args: any[]): void;
    type: T;
}

export function a<T>(serviceId?: string): A<T> {
    const id = <any>function (a: any, b: any, c: any) {
        if (arguments.length !== 3) {
            throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
        }
    };

    id.toString = () => serviceId || '';
    return id;
}

export const IB = a<IB>('IB');
// export const IB = createDecorator<IB>('IB');

export interface IB {
    hehe: () => {};
}

export class C {
    constructor(
        @IB
        readonly ib: IB
    ) {
        console.log('ib', ib);
    }
}

class D {
    constructor(public c: any) {
    }
}

const d = new D(C);
// console.log('IB.type');
console.log(d);
console.log(new d.c());
console.log(IB);