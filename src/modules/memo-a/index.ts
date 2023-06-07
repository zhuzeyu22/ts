import { hello } from '@ace/hello';

export namespace mimo {
    export class M_A {
        sayHello() {
            console.log('this is A', __dirname);
        }
    }
}

console.log(hello())
