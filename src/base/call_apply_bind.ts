// can not "use strict";
// 由于浏览器安全问题，严格模式中 this 不再默认为上下文环境对象
const msg = 'msg_foo_1';
function foo(this: any, a: any) {
    const msg = 'msg_foo_2';
    console.log(this?.msg, a);
}

const obj_1 = { msg: 'msg_1' };

foo.call(obj_1, 'qwe');
foo.apply(obj_1, ['qwe']);
const b = foo.bind(obj_1, 'bind');
foo('www');
b()