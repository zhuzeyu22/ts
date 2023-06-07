import { classicNameResolver } from "typescript";

export class A {
    get onDid() {
        return 'did this';
    }
    constructor() {
        console.log('init')
    }
    set(a: string, b: string[]) {
        console.log('this.set');
    }
    delete(a: string, b: string[]) {
        console.log('this.delete');
    }
}

const a = new A();

a.set('qwe', []);
console.log(a.onDid);

// --------- class 和 function 区别
// ES6 开始引入 class 的概念

// function 

export interface IAct {
    run: Function,
    wolk: Function,
}

export class Act implements IAct {
    constructor(
        run: Function = () => { },
        wolk: Function = () => { }
    ){
        
    }
}
