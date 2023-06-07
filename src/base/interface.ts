

console.log('IB.type');
export interface A<T> {
    (...args: any[]): void;
    type: T;
}

export function a<T>(serviceId?: string): A<T> {
    // const id = <A<T>>function (a: any, b: any, c: any) {
    const id = <any>function (a: any, b: any, c: any) {
        if (arguments.length !== 3) {
            throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
        }
    };

    id.toString = () => serviceId || '';
    return id;
}

export const IB = a<IB>('IB');
export const CB = a<CB>('CB');
// export const IB = createDecorator<IB>('IB');

export interface IB {
    hehe: Function;
}

export interface CB {
}

export class C implements IB {
    hehe = () => { };
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
console.log(IB);