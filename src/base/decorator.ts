/**
 * 将函数装饰为命令
 * @param id
 * 
 */
export function FunctionDecorator(id: string | symbol): MethodDecorator {
    return function <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void {
        // console.log('FunctionDecorator', id);
        // console.log('target', target);
        // console.log('propertyKey', propertyKey);
        console.log('descriptor', descriptor);
        // console.log('FunctionDecorator qwe');
        Reflect.deleteProperty(target, propertyKey);
        console.log('target ', target);
        // target[propertyKey] = () => { };
        const ret = Reflect.set(target, propertyKey, () => { });
        // console.log('reflect ', ret);
    };
}


export function FunctionDecorator2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Executing method: ${propertyKey}`);
        //   return originalMethod.apply(this, args);
        return null
    };

    return descriptor;
};


export class MyClass {

    @FunctionDecorator('fooId')
    foo(a: any) {
        console.log('MyClass foo', a);
    }

    @FunctionDecorator2
    foo2() {
        console.log('foo2');
    }

}


const mc = new MyClass();

// mc.foo('mc qwe');
// console.log(mc);
// console.log(mc.foo); 

mc.foo2();