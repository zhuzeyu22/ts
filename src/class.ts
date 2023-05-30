export class A {
    get onDidChangeCollections() {
        return 'qweqweqwewqe';
    }

    set(a: string, b: string[]) {
        console.log('this.set');
    }
    delete(a: string, b: string[]) {
        console.log('this.delete');
    }
}

const CLASSA = new A();

CLASSA.set('qwe', []);
console.log(CLASSA.onDidChangeCollections); 

// --------- class 和 function 区别
// ES6 开始引入 class 的概念

// function 