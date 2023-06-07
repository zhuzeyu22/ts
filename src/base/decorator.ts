/**
 * 将函数装饰为命令
 * @param id
 * 
 */
export function FunctionDecorator(id: string | symbol): MethodDecorator {
    return function <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void {
        console.log(id);
        console.log(target, propertyKey, descriptor);
        console.log('qwe')
    };
}


export class MyClass {

    @FunctionDecorator('fooId')
    foo(a: any) {
        console.log('foo', a);
    }

}


