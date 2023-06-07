
const obj = {
    fooarg(this: any, a: any, b: any) {
        this.a = a;
        this.b =b
        this.get = (target: object, prop: PropertyKey, receiver?: unknown) => {
            console.log('obj', target);
            // TS 里面强制类型转换
            return Reflect.get(...arguments as unknown as [target: object, prop: PropertyKey, receiver?: unknown]);
        };
    }
}

const a = {
    get(target: object, prop: PropertyKey, receiver?: unknown){
        console.log('a')
        return Reflect.get(...arguments as unknown as [target: object, prop: PropertyKey, receiver?: unknown]);
    }
}

const c = {
    a:'ca',
    b:'cb',
}

Reflect.apply(obj.fooarg, a, ['22', '33']);
console.log(a)
console.log(Reflect.get(a, 'a'))
console.log(Reflect.get(a, 'b'))
console.log(Reflect.get(a, 'a', c))


obj.fooarg('222', '333'); 
debugger
// const target = {
//     message1: "hello",
//     message2: "everyone",
//   };
  
//   const handler3 = {
//     get(target: object, prop: PropertyKey, receiver?: unknown) {
//       if (prop === "message2") {
//         return "world";
//       }
//       return Reflect.get(...arguments as unknown as [target: object, prop: PropertyKey, receiver?: unknown]);
//     },
//   };
  
//   const proxy3 = new Proxy(target, handler3);
  
//   console.log(proxy3.message1); // hello
//   console.log(proxy3.message2); // world